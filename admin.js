const SUPABASE_URL = window.SUPABASE_URL
const SUPABASE_KEY = window.SUPABASE_KEY
const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)

const state = {
  user: null,
  categories: [],
  products: [],
  orders: [],
  recharges: [],
  users: [],
  view: 'dashboard'
}

const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

function esc(value = ''){
  return String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]))
}

function money(value){
  const number = Number(value)
  return Number.isFinite(number) ? number.toFixed(2) : '0.00'
}

function localTime(value){
  if(!value) return ''
  return new Date(value).toLocaleString()
}

function statusLabel(status){
  const labels = {
    pending:'待支付', pending_payment:'待支付', pending_verification:'待核验',
    paid:'已支付', completed:'已完成', cancelled:'已取消', failed:'失败'
  }
  return labels[status] || status || '未知'
}

function toast(message){
  const node = $('#toast')
  node.textContent = message
  node.classList.remove('hidden')
  clearTimeout(toast.timer)
  toast.timer = setTimeout(() => node.classList.add('hidden'), 2600)
}

function showDenied(message){
  $('#loadingScreen').classList.add('hidden')
  $('#adminApp').classList.add('hidden')
  $('#deniedMessage').textContent = message
  $('#deniedScreen').classList.remove('hidden')
}

function openModal(html){
  $('#adminModalContent').innerHTML = html
  $('#adminModalBackdrop').classList.remove('hidden')
}

function closeModal(){
  $('#adminModalBackdrop').classList.add('hidden')
}

async function verifyAdmin(){
  const {data:{user}, error} = await client.auth.getUser()
  if(error || !user){
    showDenied('请先返回网站，使用管理员邮箱登录。')
    return false
  }

  const {data, error:profileError} = await client
    .from('profiles')
    .select('is_admin,email')
    .eq('id', user.id)
    .maybeSingle()

  if(profileError || !data?.is_admin){
    showDenied('当前登录账号没有管理员权限。')
    return false
  }

  state.user = user
  $('#adminEmail').textContent = data.email || user.email || ''
  $('#loadingScreen').classList.add('hidden')
  $('#adminApp').classList.remove('hidden')
  return true
}

async function loadCategories(){
  const {data, error} = await client.from('categories').select('*').order('sort_order').order('id')
  if(error) throw error
  state.categories = data || []
}

async function loadProducts(){
  const {data, error} = await client.from('products').select('*, category:categories(name,icon,color)').order('sort_order').order('id')
  if(error) throw error
  state.products = data || []
}

async function loadOrders(){
  const {data, error} = await client.from('orders').select('*, profile:profiles(email)').order('created_at', {ascending:false}).limit(500)
  if(error) throw error
  state.orders = data || []
}

async function loadRecharges(){
  const {data, error} = await client.from('recharge_requests').select('*, profile:profiles(email)').order('created_at', {ascending:false}).limit(500)
  if(error) throw error
  state.recharges = data || []
}

async function loadUsers(){
  const {data, error} = await client.from('profiles').select('*').order('created_at', {ascending:false}).limit(500)
  if(error) throw error
  state.users = data || []
}

async function loadAll(){
  await Promise.all([loadCategories(), loadProducts(), loadOrders(), loadRecharges(), loadUsers()])
  renderAll()
}

function renderAll(){
  renderDashboard()
  renderProducts()
  renderCategories()
  renderOrders()
  renderRecharges()
  renderUsers()
}

function renderDashboard(){
  const pendingOrders = state.orders.filter(item => ['pending_payment','pending_verification'].includes(item.status)).length
  const paidRecharge = state.recharges.filter(item => item.status === 'paid').reduce((sum,item) => sum + Number(item.amount || 0), 0)
  const activeProducts = state.products.filter(item => item.is_active).length
  const cards = [
    ['商品总数', state.products.length, `上架 ${activeProducts} 件`],
    ['订单总数', state.orders.length, `待处理 ${pendingOrders} 笔`],
    ['用户总数', state.users.length, '已注册账户'],
    ['已到账充值', `${money(paidRecharge)} USDT`, '按充值记录统计']
  ]
  $('#statsGrid').innerHTML = cards.map(item => `<div class='stat-card'><span>${item[0]}</span><strong>${item[1]}</strong><small>${item[2]}</small></div>`).join('')

  $('#recentOrders').innerHTML = state.orders.slice(0,7).map(item => `<div class='mini-row'><div><strong>${esc(item.product_name)}</strong><small>${esc(item.order_number)} · ${esc(item.profile?.email || '')}</small></div><span class='status ${esc(item.status)}'>${statusLabel(item.status)}</span></div>`).join('') || `<div class='empty'>暂无订单</div>`

  const low = state.products.filter(item => item.is_active && Number(item.stock) <= 5).sort((a,b) => a.stock-b.stock).slice(0,8)
  $('#lowStockProducts').innerHTML = low.map(item => `<div class='mini-row'><div><strong>${esc(item.name)}</strong><small>${esc(item.category?.name || '')}</small></div><span>${item.stock} 件</span></div>`).join('') || `<div class='empty'>目前没有低库存商品</div>`
}

function productThumb(item){
  if(item.image_url) return `<img class='thumb' src='${esc(item.image_url)}' alt=''>`
  const color = item.category?.color || '#2563eb'
  const icon = item.category?.icon || '北'
  return `<span class='thumb' style='background:${esc(color)}'>${esc(icon)}</span>`
}

function renderProducts(){
  const search = ($('#productSearch')?.value || '').trim().toLowerCase()
  const categoryId = $('#productCategoryFilter')?.value || ''
  const rows = state.products.filter(item => {
    const text = `${item.name} ${item.description || ''}`.toLowerCase()
    return (!search || text.includes(search)) && (!categoryId || String(item.category_id) === categoryId)
  })

  const filter = $('#productCategoryFilter')
  if(filter){
    const current = filter.value
    filter.innerHTML = `<option value=''>全部分类</option>` + state.categories.map(item => `<option value='${item.id}'>${esc(item.name)}</option>`).join('')
    filter.value = current
  }

  $('#productsTable').innerHTML = rows.map(item => `<tr>
    <td><div class='product-cell'>${productThumb(item)}<div><strong>${esc(item.name)}</strong><small>${esc(item.description || '')}</small></div></div></td>
    <td>${esc(item.category?.name || '')}</td><td>${money(item.price)} USDT</td><td>${item.stock}</td>
    <td><span class='status ${item.is_active ? 'active' : 'inactive'}'>${item.is_active ? '已上架' : '已下架'}</span></td>
    <td><div class='action-group'><button class='action-btn' data-edit-product='${item.id}'>编辑</button><button class='action-btn danger' data-delete-product='${item.id}'>删除</button></div></td>
  </tr>`).join('') || `<tr><td colspan='6' class='empty'>没有找到商品</td></tr>`

  $$('[data-edit-product]').forEach(button => button.onclick = () => openProductForm(Number(button.dataset.editProduct)))
  $$('[data-delete-product]').forEach(button => button.onclick = () => deleteProduct(Number(button.dataset.deleteProduct)))
}

function renderCategories(){
  $('#categoriesTable').innerHTML = state.categories.map(item => `<tr>
    <td><strong>${esc(item.name)}</strong></td><td>${esc(item.icon || '')}</td><td><span style='display:inline-block;width:24px;height:24px;border-radius:7px;background:${esc(item.color || '#2563eb')}'></span> ${esc(item.color || '')}</td><td>${item.sort_order}</td>
    <td><span class='status ${item.is_active ? 'active' : 'inactive'}'>${item.is_active ? '显示' : '隐藏'}</span></td>
    <td><div class='action-group'><button class='action-btn' data-edit-category='${item.id}'>编辑</button><button class='action-btn danger' data-delete-category='${item.id}'>删除</button></div></td>
  </tr>`).join('') || `<tr><td colspan='6' class='empty'>暂无分类</td></tr>`
  $$('[data-edit-category]').forEach(button => button.onclick = () => openCategoryForm(Number(button.dataset.editCategory)))
  $$('[data-delete-category]').forEach(button => button.onclick = () => deleteCategory(Number(button.dataset.deleteCategory)))
}

function renderOrders(){
  const search = ($('#orderSearch')?.value || '').trim().toLowerCase()
  const status = $('#orderStatusFilter')?.value || ''
  const rows = state.orders.filter(item => {
    const text = `${item.order_number} ${item.product_name} ${item.contact || ''} ${item.profile?.email || ''}`.toLowerCase()
    return (!search || text.includes(search)) && (!status || item.status === status)
  })
  $('#ordersTable').innerHTML = rows.map(item => `<tr>
    <td><strong>${esc(item.product_name)}</strong><div class='small'>${esc(item.order_number)}</div></td><td>${esc(item.profile?.email || '')}</td><td>${money(item.amount)} USDT</td><td><span class='status ${esc(item.status)}'>${statusLabel(item.status)}</span></td><td>${localTime(item.created_at)}</td><td><button class='action-btn' data-edit-order='${item.id}'>查看处理</button></td>
  </tr>`).join('') || `<tr><td colspan='6' class='empty'>没有找到订单</td></tr>`
  $$('[data-edit-order]').forEach(button => button.onclick = () => openOrderForm(button.dataset.editOrder))
}

function renderRecharges(){
  const search = ($('#rechargeSearch')?.value || '').trim().toLowerCase()
  const status = $('#rechargeStatusFilter')?.value || ''
  const rows = state.recharges.filter(item => {
    const text = `${item.recharge_number} ${item.profile?.email || ''} ${item.txid || ''}`.toLowerCase()
    return (!search || text.includes(search)) && (!status || item.status === status)
  })
  $('#rechargesTable').innerHTML = rows.map(item => `<tr>
    <td><strong>${esc(item.recharge_number)}</strong><div class='small'>${localTime(item.created_at)}</div></td><td>${esc(item.profile?.email || '')}</td><td>${money(item.amount)} USDT</td><td><span class='status ${esc(item.status)}'>${statusLabel(item.status)}</span></td><td><div class='small'>TXID：${esc(item.txid || '未填写')}</div><div class='small'>到账：${money(item.received_amount || 0)}</div></td><td><button class='action-btn' data-edit-recharge='${item.id}'>查看处理</button></td>
  </tr>`).join('') || `<tr><td colspan='6' class='empty'>没有找到充值记录</td></tr>`
  $$('[data-edit-recharge]').forEach(button => button.onclick = () => openRechargeForm(button.dataset.editRecharge))
}

function renderUsers(){
  const search = ($('#userSearch')?.value || '').trim().toLowerCase()
  const rows = state.users.filter(item => !search || String(item.email || '').toLowerCase().includes(search))
  $('#usersTable').innerHTML = rows.map(item => `<tr>
    <td><strong>${esc(item.email || '')}</strong><div class='small'>${esc(item.id)}</div></td><td>${money(item.balance)} USDT</td><td>${localTime(item.created_at)}</td><td><span class='status ${item.is_admin ? 'active' : 'inactive'}'>${item.is_admin ? '管理员' : '普通用户'}</span></td><td><button class='action-btn' data-adjust-user='${item.id}'>调整余额</button></td>
  </tr>`).join('') || `<tr><td colspan='5' class='empty'>没有找到用户</td></tr>`
  $$('[data-adjust-user]').forEach(button => button.onclick = () => openBalanceForm(button.dataset.adjustUser))
}

function openProductForm(id = null){
  const item = id ? state.products.find(row => row.id === id) : null
  openModal(`<h2>${item ? '编辑商品' : '新增商品'}</h2><form id='productForm'>
    <div class='form-grid'>
      <div class='field full'><label>商品名称</label><input id='pName' required value='${esc(item?.name || '')}'></div>
      <div class='field full'><label>商品简介</label><textarea id='pDescription' rows='4'>${esc(item?.description || '')}</textarea></div>
      <div class='field'><label>分类</label><select id='pCategory' required>${state.categories.map(cat => `<option value='${cat.id}' ${item?.category_id === cat.id ? 'selected' : ''}>${esc(cat.name)}</option>`).join('')}</select></div>
      <div class='field'><label>价格 USDT</label><input id='pPrice' type='number' min='0' step='0.01' required value='${item ? money(item.price) : '0.00'}'></div>
      <div class='field'><label>库存</label><input id='pStock' type='number' min='0' step='1' required value='${item?.stock ?? 0}'></div>
      <div class='field'><label>排序</label><input id='pSort' type='number' step='1' value='${item?.sort_order ?? 0}'></div>
      <div class='field full'><label>商品图片</label><input id='pImage' type='file' accept='image/*'><small>不上传会保留原图片，也可以只使用分类图标</small>${item?.image_url ? `<img class='image-preview' src='${esc(item.image_url)}' alt=''>` : ''}</div>
      <div class='field full'><div class='switch-row'><label><input id='pActive' type='checkbox' ${item?.is_active !== false ? 'checked' : ''}> 上架显示</label><label><input id='pCustom' type='checkbox' ${item?.is_custom ? 'checked' : ''}> 点击后联系客服</label></div></div>
    </div>
    <div class='modal-actions'><button type='button' class='secondary-btn' id='cancelProduct'>取消</button><button class='primary-btn' type='submit'>保存商品</button></div>
  </form>`)
  $('#cancelProduct').onclick = closeModal
  $('#productForm').onsubmit = async event => {
    event.preventDefault()
    const submit = event.submitter
    submit.disabled = true
    submit.textContent = '正在保存'
    try{
      let imageUrl = item?.image_url || null
      const file = $('#pImage').files[0]
      if(file){
        const extension = (file.name.split('.').pop() || 'jpg').toLowerCase()
        const path = `products/${Date.now()}-${Math.random().toString(36).slice(2)}.${extension}`
        const {error:uploadError} = await client.storage.from('product-images').upload(path, file, {upsert:false})
        if(uploadError) throw uploadError
        imageUrl = client.storage.from('product-images').getPublicUrl(path).data.publicUrl
      }
      const payload = {
        category_id:Number($('#pCategory').value), name:$('#pName').value.trim(), description:$('#pDescription').value.trim(),
        price:Number($('#pPrice').value), stock:Number($('#pStock').value), sort_order:Number($('#pSort').value || 0),
        image_url:imageUrl, is_active:$('#pActive').checked, is_custom:$('#pCustom').checked
      }
      const query = item ? client.from('products').update(payload).eq('id', item.id) : client.from('products').insert(payload)
      const {error} = await query
      if(error) throw error
      await loadProducts(); renderAll(); closeModal(); toast('商品已保存')
    }catch(error){ alert('保存失败：' + error.message); submit.disabled = false; submit.textContent = '保存商品' }
  }
}

async function deleteProduct(id){
  const item = state.products.find(row => row.id === id)
  if(!confirm(`确定删除商品 ${item?.name || ''} 吗？`)) return
  const {error} = await client.from('products').delete().eq('id', id)
  if(error){ alert('删除失败：' + error.message); return }
  await loadProducts(); renderAll(); toast('商品已删除')
}

function openCategoryForm(id = null){
  const item = id ? state.categories.find(row => row.id === id) : null
  openModal(`<h2>${item ? '编辑分类' : '新增分类'}</h2><form id='categoryForm'><div class='form-grid'>
    <div class='field full'><label>分类名称</label><input id='cName' required value='${esc(item?.name || '')}'></div>
    <div class='field'><label>图标文字</label><input id='cIcon' maxlength='3' value='${esc(item?.icon || '北')}'></div>
    <div class='field'><label>颜色</label><input id='cColor' type='color' value='${esc(item?.color || '#2563eb')}'></div>
    <div class='field'><label>排序</label><input id='cSort' type='number' value='${item?.sort_order ?? 0}'></div>
    <div class='field'><label><input id='cActive' type='checkbox' ${item?.is_active !== false ? 'checked' : ''}> 前台显示</label></div>
  </div><div class='modal-actions'><button type='button' class='secondary-btn' id='cancelCategory'>取消</button><button class='primary-btn' type='submit'>保存分类</button></div></form>`)
  $('#cancelCategory').onclick = closeModal
  $('#categoryForm').onsubmit = async event => {
    event.preventDefault()
    const payload = {name:$('#cName').value.trim(),icon:$('#cIcon').value.trim() || '北',color:$('#cColor').value,sort_order:Number($('#cSort').value || 0),is_active:$('#cActive').checked}
    const query = item ? client.from('categories').update(payload).eq('id', item.id) : client.from('categories').insert(payload)
    const {error} = await query
    if(error){ alert('保存失败：' + error.message); return }
    await Promise.all([loadCategories(),loadProducts()]); renderAll(); closeModal(); toast('分类已保存')
  }
}

async function deleteCategory(id){
  const item = state.categories.find(row => row.id === id)
  if(!confirm(`确定删除分类 ${item?.name || ''} 吗？分类下有商品时不能删除。`)) return
  const {error} = await client.from('categories').delete().eq('id', id)
  if(error){ alert('删除失败：' + error.message); return }
  await loadCategories(); renderAll(); toast('分类已删除')
}

function openOrderForm(id){
  const item = state.orders.find(row => row.id === id)
  if(!item) return
  openModal(`<h2>处理商品订单</h2><div class='detail-box'>订单号：${esc(item.order_number)}<br>商品：${esc(item.product_name)}<br>用户：${esc(item.profile?.email || '')}<br>金额：${money(item.amount)} USDT<br>联系方式：${esc(item.contact || '')}<br>需求：${esc(item.note || '')}</div>
  <form id='orderForm'><div class='form-grid'>
    <div class='field'><label>订单状态</label><select id='oStatus'>${['pending_payment','pending_verification','paid','completed','cancelled'].map(value => `<option value='${value}' ${item.status===value?'selected':''}>${statusLabel(value)}</option>`).join('')}</select></div>
    <div class='field full'><label>交付结果</label><textarea id='oDelivery' rows='4'>${esc(item.delivery_result || '')}</textarea></div>
    <div class='field full'><label>管理员备注</label><textarea id='oAdminNote' rows='3'>${esc(item.admin_note || '')}</textarea></div>
  </div><div class='modal-actions'><button type='button' class='secondary-btn' id='cancelOrderEdit'>取消</button><button class='primary-btn' type='submit'>保存订单</button></div></form>`)
  $('#cancelOrderEdit').onclick = closeModal
  $('#orderForm').onsubmit = async event => {
    event.preventDefault()
    const status = $('#oStatus').value
    const payload = {status,delivery_result:$('#oDelivery').value.trim(),admin_note:$('#oAdminNote').value.trim(),completed_at:status==='completed'?new Date().toISOString():null}
    const {error} = await client.from('orders').update(payload).eq('id', id)
    if(error){ alert('保存失败：' + error.message); return }
    await Promise.all([loadOrders(),loadProducts()]); renderAll(); closeModal(); toast('订单已更新')
  }
}

function openRechargeForm(id){
  const item = state.recharges.find(row => row.id === id)
  if(!item) return
  openModal(`<h2>处理充值记录</h2><div class='detail-box'>充值单：${esc(item.recharge_number)}<br>用户：${esc(item.profile?.email || '')}<br>申请金额：${money(item.amount)} USDT<br>创建时间：${localTime(item.created_at)}</div>
  <form id='rechargeForm'><div class='form-grid'>
    <div class='field'><label>状态</label><select id='rStatus'>${['pending','pending_verification','paid','failed'].map(value => `<option value='${value}' ${item.status===value?'selected':''}>${statusLabel(value)}</option>`).join('')}</select></div>
    <div class='field'><label>实际到账</label><input id='rReceived' type='number' min='0' step='0.000001' value='${item.received_amount || item.amount || 0}'></div>
    <div class='field full'><label>TXID</label><input id='rTxid' value='${esc(item.txid || '')}'></div>
    <div class='field full'><label>付款地址</label><input id='rSender' value='${esc(item.sender_address || '')}'></div>
  </div><div class='modal-actions'><button type='button' class='secondary-btn' id='cancelRechargeEdit'>取消</button><button class='primary-btn' type='submit'>保存充值</button></div></form>`)
  $('#cancelRechargeEdit').onclick = closeModal
  $('#rechargeForm').onsubmit = async event => {
    event.preventDefault()
    const newStatus = $('#rStatus').value
    if(newStatus === 'paid' && item.status !== 'paid'){
      const {error} = await client.rpc('admin_confirm_recharge', {target_recharge_id:id, confirmed_amount:Number($('#rReceived').value || item.amount), payment_txid:$('#rTxid').value.trim(), payment_sender:$('#rSender').value.trim()})
      if(error){ alert('入账失败：' + error.message); return }
    }else{
      const {error} = await client.from('recharge_requests').update({status:newStatus,received_amount:Number($('#rReceived').value || 0),txid:$('#rTxid').value.trim() || null,sender_address:$('#rSender').value.trim() || null}).eq('id', id)
      if(error){ alert('保存失败：' + error.message); return }
    }
    await Promise.all([loadRecharges(),loadUsers()]); renderAll(); closeModal(); toast('充值记录已更新')
  }
}

function openBalanceForm(userId){
  const item = state.users.find(row => row.id === userId)
  if(!item) return
  openModal(`<h2>调整用户余额</h2><div class='detail-box'>用户：${esc(item.email || '')}<br>当前余额：${money(item.balance)} USDT</div><form id='balanceForm'><div class='form-grid'>
    <div class='field'><label>变动金额</label><input id='balanceDelta' type='number' step='0.01' required placeholder='增加填正数，扣除填负数'></div>
    <div class='field full'><label>原因</label><input id='balanceReason' required placeholder='例如 人工补款或订单退款'></div>
  </div><div class='modal-actions'><button type='button' class='secondary-btn' id='cancelBalance'>取消</button><button class='primary-btn' type='submit'>确认调整</button></div></form>`)
  $('#cancelBalance').onclick = closeModal
  $('#balanceForm').onsubmit = async event => {
    event.preventDefault()
    const {error} = await client.rpc('admin_adjust_balance', {target_user_id:userId,delta_amount:Number($('#balanceDelta').value),reason_text:$('#balanceReason').value.trim()})
    if(error){ alert('调整失败：' + error.message); return }
    await loadUsers(); renderAll(); closeModal(); toast('余额已调整')
  }
}

function switchView(view){
  state.view = view
  const titles = {dashboard:['数据概览','网站经营数据和待处理事项'],products:['商品管理','新增、编辑、上下架和调整库存'],categories:['分类管理','维护前台商品分类和显示顺序'],orders:['订单管理','查看需求、修改状态并填写交付结果'],recharges:['充值管理','核对充值与手动确认入账'],users:['用户与余额','查看用户并安全调整余额']}
  $$('.view').forEach(node => node.classList.toggle('active', node.id === `${view}View`))
  $$('.nav-btn').forEach(node => node.classList.toggle('active', node.dataset.view === view))
  $('#pageTitle').textContent = titles[view][0]
  $('#pageSubtitle').textContent = titles[view][1]
  $('.admin-sidebar').classList.remove('open')
}

function bindEvents(){
  $$('.nav-btn').forEach(button => button.onclick = () => switchView(button.dataset.view))
  $$('[data-jump]').forEach(button => button.onclick = () => switchView(button.dataset.jump))
  $('#adminModalClose').onclick = closeModal
  $('#adminModalBackdrop').onclick = event => { if(event.target.id === 'adminModalBackdrop') closeModal() }
  $('#mobileMenu').onclick = () => $('.admin-sidebar').classList.toggle('open')
  $('#adminLogout').onclick = async () => { await client.auth.signOut(); location.href='index.html' }
  $('#addProductBtn').onclick = () => openProductForm()
  $('#addCategoryBtn').onclick = () => openCategoryForm()
  $('#productSearch').oninput = renderProducts
  $('#productCategoryFilter').onchange = renderProducts
  $('#orderSearch').oninput = renderOrders
  $('#orderStatusFilter').onchange = renderOrders
  $('#rechargeSearch').oninput = renderRecharges
  $('#rechargeStatusFilter').onchange = renderRecharges
  $('#userSearch').oninput = renderUsers
  $('#refreshOrders').onclick = async () => { await loadOrders(); renderAll(); toast('订单已刷新') }
  $('#refreshRecharges').onclick = async () => { await loadRecharges(); renderAll(); toast('充值记录已刷新') }
  $('#refreshUsers').onclick = async () => { await loadUsers(); renderAll(); toast('用户已刷新') }
}

async function start(){
  bindEvents()
  if(!await verifyAdmin()) return
  try{ await loadAll() }catch(error){ showDenied('后台数据加载失败：' + error.message) }
}

start()
