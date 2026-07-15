const fallbackCategories = [
  { name: 'theleague', color: '#16191e', icon: 'L' },
  { name: 'Match', color: '#4659d6', icon: 'M' },
  { name: '2RedBeans', color: '#ee4a95', icon: '2R' },
  { name: '定制服务', color: '#1d1f24', icon: '定' },
  { name: '多元人群服务', color: '#c64fad', icon: 'S' },
  { name: 'Tandem', color: '#4bb7c1', icon: 'T' },
  { name: 'POF', color: '#ec845c', icon: 'P' },
  { name: 'hellotalk', color: '#4167d9', icon: 'H' },
  { name: 'Ourtime', color: '#e36c8f', icon: 'O' }
]

const fallbackProducts = [
  ['theleague','The League 35至55岁资料优化','基于本人真实经历优化简介、兴趣、关系目标与照片顺序',12,27],
  ['theleague','The League 通用资料优化','适合年龄不限的基础资料检查与文案调整',10,24],
  ['theleague','The League 男性 35至55岁资料优化','优化职业表达、生活方式、关系目标与第一条消息',12,16],
  ['theleague','The League 快速资料检查','检查简介、照片顺序、隐私设置与表达一致性',10,9],

  ['Match','Match 新手使用教程','平台功能、订阅设置、隐私选项与安全提示',5,99999],
  ['Match','Match 女性 40至70岁资料优化','基于本人真实信息优化简介、兴趣和长期关系目标',15,24],
  ['Match','Match 女性 30至40岁资料优化','优化简介结构、照片顺序与自然开场内容',14,0],
  ['Match','Match 女性 66岁以上资料优化','突出生活方式、兴趣、家庭观念与关系目标',25,5],
  ['Match','Match 女性 40至65岁深度资料包','包含简介重写、照片排序与三条开场消息建议',33,5],
  ['Match','Match 女性 30至40岁照片排序建议','检查照片清晰度、顺序、风格与资料一致性',27,0],
  ['Match','Match 女性 18至29岁资料优化','优化真实自我介绍、兴趣标签与聊天开场',19,3],
  ['Match','Match 男性 65岁以上资料优化','优化职业经历、兴趣、生活状态与长期关系表达',15,44],
  ['Match','Match 男性 56至64岁资料优化','优化简介重点、照片顺序与第一条消息',21,8],
  ['Match','Match 男性 40至55岁资料优化','基于真实信息改善简介、兴趣与关系目标表达',25,14],
  ['Match','Match 男性 35至39岁资料优化','优化个人简介、照片搭配与自然开场内容',17,23],
  ['Match','Match 男性 30至34岁资料优化','提供简介精简、兴趣整理与消息模板建议',13,33],
  ['Match','Match 男性 25至29岁资料优化','检查资料完整度并优化自我介绍与兴趣表达',9,98],
  ['Match','Match 男性 25岁以下资料检查','基础资料检查、隐私设置与安全使用建议',7,99],

  ['2RedBeans','2RedBeans 女性中文资料优化','基于本人真实经历优化中文简介、兴趣与关系目标',11,7],
  ['2RedBeans','2RedBeans 男性中文资料优化','优化职业、兴趣、生活方式与自然开场内容',11,19],

  ['定制服务','Mamba 资料定制','按本人真实资料定制简介、兴趣标签与开场内容',25,54],
  ['定制服务','Boo 资料定制','结合性格标签优化真实简介、照片顺序与聊天开场',25,46],
  ['定制服务','Bumble 综合资料包','包含简介、照片排序、提示题回答与开场消息建议',85,98],
  ['定制服务','Facebook Dating 资料定制','优化真实简介、兴趣、生活方式与关系目标',40,99],
  ['定制服务','OkCupid 资料定制','优化问题回答、个人简介与匹配偏好表达',30,89],
  ['定制服务','Badoo 资料定制','提供简介优化、照片建议与隐私设置检查',35,98],

  ['多元人群服务','HER 资料优化','基于本人真实信息优化简介、兴趣与关系目标',6,0],
  ['多元人群服务','Zoe 资料优化','优化个人简介、照片顺序与自然开场内容',6,15],
  ['多元人群服务','Grindr 资料与隐私指导','资料表达、位置权限、隐私范围与安全使用建议',8,16],
  ['多元人群服务','Adam4Adam 资料与隐私指导','优化真实资料并检查隐私、屏蔽和举报设置',9,29],
  ['多元人群服务','SCRUFF 资料优化','优化简介、兴趣标签、照片顺序与安全设置',6,63],

  ['Tandem','Tandem 英语学习资料 EN','优化英文自我介绍、学习目标与兴趣话题',7,115],
  ['Tandem','Tandem 中文学习资料 CN','优化中文自我介绍、学习目标与话题标签',7,46],
  ['Tandem','Tandem 会员资料咨询','检查会员功能、学习设置与隐私权限',8,731],
  ['Tandem','Tandem 随机语言话题包','提供适合语言交换的自然话题与开场问题',7,111],
  ['Tandem','Tandem 学习资料快速优化','基础简介、学习目标和安全设置检查',6.5,103],

  ['POF','POF 40至55岁资料优化','基于本人真实经历优化简介、兴趣与关系目标',11,0],
  ['POF','POF 男性资料快速检查','检查职业、兴趣、照片顺序与开场内容',6,297],
  ['POF','POF 女性深度资料优化','包含简介重写、照片建议与自然开场消息',15,0],
  ['POF','POF 35至55岁综合资料包','优化真实简介、生活方式、关系目标与隐私设置',17,0],

  ['hellotalk','HelloTalk 西班牙语资料优化','优化学习目标、自我介绍、兴趣标签与开场话题',6,146],
  ['hellotalk','HelloTalk 越南语资料优化','优化语言设置、个人简介与自然交流话题',6,56],
  ['hellotalk','HelloTalk 繁体中文 TW 资料优化','优化繁体中文简介、学习目标与兴趣标签',6,95],
  ['hellotalk','HelloTalk 韩语资料优化 KR','优化韩语学习资料、自我介绍与开场内容',6,59],
  ['hellotalk','HelloTalk 日语资料优化 JP','优化日语学习目标、兴趣标签与自然话题',6,79],
  ['hellotalk','HelloTalk 随机语言话题包','提供适合语言交换的开场问题与持续话题',5.5,476],
  ['hellotalk','HelloTalk 简体中文 CN 资料优化','优化中文简介、学习目标、隐私设置与话题标签',7,105],
  ['hellotalk','HelloTalk 英语资料优化 EN','优化英文简介、学习目标与自然交流话题',7,60],

  ['Ourtime','OurTime 女性 65至73岁资料包','优化真实生活方式、兴趣、家庭观念与关系目标',33.6,0],
  ['Ourtime','OurTime 男性 56至66岁资料包','优化职业经历、兴趣、照片顺序与关系目标',25.8,1],
  ['Ourtime','OurTime 加拿大男性 45至70岁资料优化','结合真实经历优化简介、兴趣与自然开场内容',19.3,70],
  ['Ourtime','OurTime 加拿大女性 40至70岁资料优化','优化生活方式、照片顺序与长期关系表达',29.7,0],
  ['Ourtime','OurTime 男性 66至72岁资料优化','优化个人简介、兴趣、家庭观念与消息开场',19.3,169]
].map((p,i)=>({id:i+1,category:p[0],name:p[1],desc:p[2],price:p[3],stock:p[4],isCustom:p[0].includes('定制服务')}))

let categories = [...fallbackCategories]
let products = [...fallbackProducts]

const APP_CONFIG = {
  walletAddress: 'TBrXpCm2bmo4SXrTgPVSWNAmE3KxmQTr3n',
  qrImage: 'trc20-qr.png',
  supportTelegram: '@your_support',
  supportEmail: 'support@example.com',
  listenerFunction: 'tron-listener'
}

const state = {
  category: '全部商品',
  query: '',
  balance: 0,
  orders: [],
  ledger: [],
  user: null,
  isAdmin: false,
  catalogLoaded: false,
  remoteOrdersAvailable: true,
  remoteBalanceAvailable: true,
  remoteLedgerAvailable: true
}

const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

let supabaseClient = null
let activePaymentTimer = null

function esc(value = ''){
  return String(value).replace(/[&<>'"]/g, char => ({
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    "'":'&#39;',
    '"':'&quot;'
  }[char]))
}

function formatMoney(value){
  const amount = Number(value)
  return Number.isFinite(amount) ? amount.toFixed(2) : '0.00'
}

function currentUserStorageKey(){
  return state.user ? `bc_orders_${state.user.id}` : 'bc_orders_guest'
}

function loadLocalOrders(){
  try{
    const raw = localStorage.getItem(currentUserStorageKey())
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  }catch(error){
    console.warn('读取本地订单失败：', error.message)
    return []
  }
}

function saveLocalOrders(){
  try{
    localStorage.setItem(currentUserStorageKey(), JSON.stringify(state.orders))
  }catch(error){
    console.warn('保存本地订单失败：', error.message)
  }
}


async function loadCatalog(){
  if(!supabaseClient) return

  try{
    const [categoryResult, productResult] = await Promise.all([
      supabaseClient
        .from('categories')
        .select('*')
        .eq('is_active', true)
        .order('sort_order', {ascending:true})
        .order('id', {ascending:true}),
      supabaseClient
        .from('products')
        .select('*, category:categories(name, icon, color)')
        .eq('is_active', true)
        .order('sort_order', {ascending:true})
        .order('id', {ascending:true})
    ])

    if(categoryResult.error) throw categoryResult.error
    if(productResult.error) throw productResult.error

    if(Array.isArray(categoryResult.data) && categoryResult.data.length){
      categories = categoryResult.data.map(item => ({
        id: Number(item.id),
        name: item.name,
        icon: item.icon || '北',
        color: item.color || '#2563eb'
      }))
    }

    if(Array.isArray(productResult.data) && productResult.data.length){
      products = productResult.data.map(item => ({
        id: Number(item.id),
        categoryId: Number(item.category_id),
        category: item.category?.name || '其他',
        name: item.name,
        desc: item.description || '',
        price: Number(item.price || 0),
        stock: Number(item.stock || 0),
        imageUrl: item.image_url || '',
        isCustom: Boolean(item.is_custom)
      }))
    }

    state.catalogLoaded = true
  }catch(error){
    console.warn('商品数据库暂不可用，继续显示内置商品：', error.message)
  }

  renderAll()
}

async function loadAdminStatus(){
  state.isAdmin = false
  if(!state.user || !supabaseClient) return

  try{
    const {data, error} = await supabaseClient
      .from('profiles')
      .select('is_admin')
      .eq('id', state.user.id)
      .maybeSingle()

    if(error) throw error
    state.isAdmin = Boolean(data?.is_admin)
  }catch(error){
    console.warn('管理员状态读取失败：', error.message)
  }
}

function navButton(category){
  return `<button class=nav-item data-category="${esc(category.name)}">
    <span class=dot-logo style="background:${category.color}">${esc(category.icon)}</span>
    <span>${esc(category.name)}</span>
  </button>`
}

function renderNav(){
  const categoryNav = $('#categoryNav')
  const categoryChips = $('#categoryChips')
  if(!categoryNav || !categoryChips) return

  categoryNav.innerHTML = categories.map(navButton).join('')
  categoryChips.innerHTML = [
    `<button class="chip ${state.category === '全部商品' ? 'active' : ''}" data-category=全部商品>▦ 所有商品</button>`,
    ...categories.map(category => `
      <button class="chip ${state.category === category.name ? 'active' : ''}" data-category="${esc(category.name)}">
        ${esc(category.icon)} ${esc(category.name)}
      </button>`)
  ].join('')

  $$('[data-category]').forEach(button => {
    button.onclick = () => {
      state.category = button.dataset.category
      renderNav()
      renderProducts()
      const sidebar = $('.sidebar')
      if(innerWidth < 820 && sidebar) sidebar.classList.remove('open')
    }
  })
}

function renderProducts(){
  const productSections = $('#productSections')
  if(!productSections) return

  const query = state.query.toLowerCase()
  const filtered = products.filter(product => {
    const categoryMatches = state.category === '全部商品' || product.category === state.category
    const queryMatches = !query ||
      product.name.toLowerCase().includes(query) ||
      product.desc.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    return categoryMatches && queryMatches
  })

  const grouped = {}
  filtered.forEach(product => {
    if(!grouped[product.category]) grouped[product.category] = []
    grouped[product.category].push(product)
  })

  productSections.innerHTML = Object.keys(grouped).map(categoryName => {
    const category = categories.find(item => item.name === categoryName)
    return `<section>
      <div class=section-title><span>◉</span>${esc(categoryName)}</div>
      <div class=product-list>
        ${grouped[categoryName].map(product => `
          <div class=product-card>
            <div class=product-icon style="background:${category?.color || '#222'}">${esc(category?.icon || '北')}</div>
            <div>
              <div class=product-name>${esc(product.name)}</div>
              <div class=product-desc>${esc(product.desc)}</div>
            </div>
            <div class=product-price>$${formatMoney(product.price)}</div>
            <div class=stock>库存 ${product.stock}</div>
            <button class=buy-btn data-buy=${product.id}>
              ${product.isCustom ? '联系客服' : (product.stock === 0 ? '查看库存' : '▢ 购买')}
            </button>
          </div>`).join('')}
      </div>
    </section>`
  }).join('') || `<div class=pay-box>没有找到相关商品</div>`

  $$('[data-buy]').forEach(button => {
    button.onclick = async () => {
      const product = products.find(item => item.id === Number(button.dataset.buy))
      if(!product) return

      if(product.isCustom){
        openContact()
        return
      }

      if(product.stock === 0){
        openModal('<h3>库存提醒</h3><div class=pay-box>当前服务名额已满，请稍后查看或联系客服预约。</div>')
        return
      }

      await openBuy(product.id)
    }
  })
}

function renderBalance(){
  const balanceValue = $('#balanceValue')
  if(balanceValue) balanceValue.textContent = formatMoney(state.balance)
}

function renderAll(){
  renderBalance()
  renderNav()
  renderProducts()
}

function openModal(html){
  const content = $('#modalContent')
  const backdrop = $('#modalBackdrop')
  if(!content || !backdrop) return
  content.innerHTML = html
  backdrop.classList.add('show')
}

function closeModal(){
  if(activePaymentTimer){
    clearInterval(activePaymentTimer)
    activePaymentTimer = null
  }
  const backdrop = $('#modalBackdrop')
  if(backdrop) backdrop.classList.remove('show')
}

function setUserDisplay(user){
  const userButton = $('#userBtn')
  if(!userButton) return

  const nameNode = userButton.querySelectorAll('span')[1]
  const avatarNode = userButton.querySelector('.avatar')

  if(user){
    const displayName = user.email ? user.email.split('@')[0] : '用户'
    if(nameNode) nameNode.textContent = displayName
    if(avatarNode) avatarNode.textContent = displayName.charAt(0).toUpperCase()
  }else{
    if(nameNode) nameNode.textContent = '登录 / 注册'
    if(avatarNode) avatarNode.textContent = 'U'
  }
}

async function getCurrentUser(){
  if(!supabaseClient) return null
  try{
    const {data, error} = await supabaseClient.auth.getUser()
    if(error) throw error
    return data.user || null
  }catch(error){
    console.warn('读取登录状态失败：', error.message)
    return null
  }
}

async function requireLogin(message = '请先登录或注册，再继续操作。'){
  const user = await getCurrentUser()
  if(user){
    state.user = user
    return user
  }

  openAuthModal(message)
  return null
}

async function loadBalance(){
  if(!state.user || !supabaseClient){
    state.balance = 0
    renderBalance()
    return
  }

  if(!state.remoteBalanceAvailable){
    state.balance = Number(localStorage.getItem(`bc_balance_${state.user.id}`) || 0)
    renderBalance()
    return
  }

  try{
    const {data, error} = await supabaseClient
      .from('profiles')
      .select('balance')
      .eq('id', state.user.id)
      .maybeSingle()

    if(error) throw error
    state.balance = Number(data?.balance || 0)
  }catch(error){
    state.remoteBalanceAvailable = false
    state.balance = Number(localStorage.getItem(`bc_balance_${state.user.id}`) || 0)
    console.warn('profiles 表暂不可用，余额使用本地备用数据：', error.message)
  }

  renderBalance()
}

function normalizeRemoteOrder(row){
  return {
    id: row.id || null,
    no: row.order_number || row.recharge_number || row.no || '',
    product: row.product_name || row.product || '账户充值',
    amount: Number(row.amount || 0),
    contact: row.contact || '',
    note: row.note || '',
    status: row.status || 'pending',
    created: row.created_at ? new Date(row.created_at).toLocaleString() : (row.created || ''),
    type: row.recharge_number ? 'recharge' : (row.type || 'product')
  }
}

async function loadOrders(){
  if(!state.user){
    state.orders = []
    return
  }

  const localOrders = loadLocalOrders()

  if(!supabaseClient || !state.remoteOrdersAvailable){
    state.orders = localOrders
    return
  }

  try{
    const [ordersResult, rechargeResult] = await Promise.all([
      supabaseClient
        .from('orders')
        .select('*')
        .eq('user_id', state.user.id)
        .order('created_at', {ascending:false}),
      supabaseClient
        .from('recharge_requests')
        .select('*')
        .eq('user_id', state.user.id)
        .order('created_at', {ascending:false})
    ])

    const remoteOrders = []
    if(!ordersResult.error && Array.isArray(ordersResult.data)){
      remoteOrders.push(...ordersResult.data.map(normalizeRemoteOrder))
    }
    if(!rechargeResult.error && Array.isArray(rechargeResult.data)){
      remoteOrders.push(...rechargeResult.data.map(normalizeRemoteOrder))
    }

    const hardError = ordersResult.error && rechargeResult.error
    if(hardError) throw ordersResult.error

    const merged = [...remoteOrders]
    localOrders.forEach(localOrder => {
      if(!merged.some(remoteOrder => remoteOrder.no === localOrder.no)){
        merged.push(localOrder)
      }
    })

    merged.sort((a,b) => String(b.no).localeCompare(String(a.no)))
    state.orders = merged
  }catch(error){
    state.remoteOrdersAvailable = false
    state.orders = localOrders
    console.warn('远程订单表暂不可用，订单使用本地备用数据：', error.message)
  }
}

async function refreshAccountData(){
  await Promise.all([loadBalance(), loadOrders(), loadAdminStatus()])
  renderAll()
}

function openAuthModal(initialMessage = ''){
  openModal(`
    <h3>邮箱登录 / 注册</h3>
    <div class=form-row>
      <label>邮箱</label>
      <input id=authEmail type=email autocomplete=email placeholder=请输入邮箱>
    </div>
    <div class=form-row>
      <label>密码</label>
      <input id=authPassword type=password autocomplete=current-password placeholder=至少6位>
    </div>
    <div class=modal-actions>
      <button class=secondary-btn id=registerAccount>注册</button>
      <button class=primary-btn id=loginAccount>登录</button>
    </div>
    <p class=small id=authMessage>${esc(initialMessage)}</p>
  `)

  const message = $('#authMessage')
  const registerButton = $('#registerAccount')
  const loginButton = $('#loginAccount')

  registerButton.onclick = async () => {
    if(!supabaseClient){
      message.textContent = '登录服务没有加载，请刷新页面后重试。'
      return
    }

    const email = $('#authEmail').value.trim()
    const password = $('#authPassword').value

    if(!email || password.length < 6){
      message.textContent = '请输入正确邮箱，密码至少6位。'
      return
    }

    registerButton.disabled = true
    loginButton.disabled = true
    message.textContent = '正在注册...'

    const {data, error} = await supabaseClient.auth.signUp({email, password})

    registerButton.disabled = false
    loginButton.disabled = false

    if(error){
      message.textContent = error.message
      return
    }

    if(data.session){
      message.textContent = '注册并登录成功。'
      setTimeout(closeModal, 400)
    }else{
      message.textContent = '注册成功，请检查邮箱确认后再登录。'
    }
  }

  loginButton.onclick = async () => {
    if(!supabaseClient){
      message.textContent = '登录服务没有加载，请刷新页面后重试。'
      return
    }

    const email = $('#authEmail').value.trim()
    const password = $('#authPassword').value

    if(!email || !password){
      message.textContent = '请输入邮箱和密码。'
      return
    }

    registerButton.disabled = true
    loginButton.disabled = true
    message.textContent = '正在登录...'

    const {error} = await supabaseClient.auth.signInWithPassword({email, password})

    registerButton.disabled = false
    loginButton.disabled = false

    if(error){
      message.textContent = error.message
      return
    }

    message.textContent = '登录成功。'
    setTimeout(closeModal, 400)
  }
}

async function logoutAccount(){
  if(!supabaseClient) return

  const {error} = await supabaseClient.auth.signOut()
  if(error){
    alert('退出失败：' + error.message)
    return
  }

  state.user = null
  state.isAdmin = false
  state.balance = 0
  state.orders = []
  setUserDisplay(null)
  renderAll()
  closeModal()
}

async function openAccount(){
  const user = await getCurrentUser()
  if(!user){
    openAuthModal()
    return
  }

  openModal(`
    <h3>账户信息</h3>
    <div class=pay-box>
      <p>邮箱：${esc(user.email || '')}</p>
      <p>余额：${formatMoney(state.balance)} USDT</p>
      ${state.isAdmin ? '<p><strong>管理员权限已启用</strong></p>' : ''}
    </div>
    <div class=modal-actions>
      ${state.isAdmin ? '<button class=primary-btn id=openAdmin>管理后台</button>' : ''}
      <button class=secondary-btn id=logoutFromModal>退出登录</button>
    </div>
  `)

  if(state.isAdmin) $('#openAdmin').onclick = () => { location.href = 'admin.html' }
  $('#logoutFromModal').onclick = logoutAccount
}

async function createRemoteProductOrder(order, user){
  if(!supabaseClient || !state.remoteOrdersAvailable) return null

  try{
    const {data, error} = await supabaseClient
      .from('orders')
      .insert({
        order_number: order.no,
        user_id: user.id,
        product_id: order.productId,
        product_name: order.product,
        amount: order.amount,
        contact: order.contact,
        note: order.note,
        status: 'pending_payment'
      })
      .select('*')
      .single()

    if(error) throw error
    return normalizeRemoteOrder(data)
  }catch(error){
    state.remoteOrdersAvailable = false
    console.warn('orders 表暂不可用，商品订单保存到本地：', error.message)
    return null
  }
}

async function openBuy(id){
  const user = await requireLogin('请先登录或注册，再购买商品。')
  if(!user) return

  const product = products.find(item => item.id === id)
  if(!product) return

  openModal(`
    <h3>确认订单</h3>
    <div class=pay-box>
      <strong>${esc(product.name)}</strong>
      <div class=small>${esc(product.desc)}</div>
      <p>金额：<b>$${formatMoney(product.price)}</b></p>
    </div>
    <div class=form-row>
      <label>联系账号</label>
      <input id=contactValue placeholder=填写 Telegram、邮箱或其他联系方式>
    </div>
    <div class=form-row>
      <label>需求说明</label>
      <textarea id=noteValue rows=4 placeholder=填写合法且真实的服务需求></textarea>
    </div>
    <div class=modal-actions>
      <button class=secondary-btn id=cancelOrder>取消</button>
      <button class=primary-btn id=confirmOrder>创建订单</button>
    </div>
  `)

  $('#cancelOrder').onclick = closeModal
  $('#confirmOrder').onclick = async () => {
    const contact = $('#contactValue').value.trim()
    const note = $('#noteValue').value.trim()
    if(!contact){
      alert('请填写联系方式')
      return
    }

    const button = $('#confirmOrder')
    button.disabled = true
    button.textContent = '正在创建...'

    const order = {
      no: 'BC' + Date.now(),
      productId: product.id,
      product: product.name,
      amount: Number(product.price),
      contact,
      note,
      status: '待支付',
      created: new Date().toLocaleString(),
      type: 'product'
    }

    const remoteOrder = await createRemoteProductOrder(order, user)
    const finalOrder = remoteOrder || order

    if(!remoteOrder){
      state.orders.unshift(order)
      saveLocalOrders()
    }else{
      state.orders.unshift(remoteOrder)
    }

    openPayment(finalOrder)
  }
}

async function updatePaymentStatus(order){
  if(!supabaseClient || !state.user) return

  try{
    if(order.type === 'recharge'){
      await supabaseClient
        .from('recharge_requests')
        .update({status:'pending_verification'})
        .eq('recharge_number', order.no)
        .eq('user_id', state.user.id)
    }else if(order.id && state.remoteOrdersAvailable){
      await supabaseClient
        .from('orders')
        .update({status:'pending_verification'})
        .eq('id', order.id)
        .eq('user_id', state.user.id)
    }

    if(APP_CONFIG.listenerFunction){
      const {error} = await supabaseClient.functions.invoke(APP_CONFIG.listenerFunction, {
        body: {source:'website', order_number:order.no}
      })
      if(error) console.warn('链上监听函数调用失败：', error.message)
    }
  }catch(error){
    console.warn('更新付款状态失败：', error.message)
  }
}

function openPayment(order){
  if(activePaymentTimer) clearInterval(activePaymentTimer)

  let remaining = 15 * 60
  openModal(`
    <h3>USDT TRC20 支付</h3>
    <div class=payment-page>
      <div class=payment-summary>
        <div><span class=small>订单号</span><strong>${esc(order.no)}</strong></div>
        <div><span class=small>应付金额</span><strong>${formatMoney(order.amount)} USDT</strong></div>
      </div>

      <div class=countdown-wrap>
        剩余时间：<strong id=countdownText>15分00秒</strong>
      </div>

      <div class=chain-tip>请仔细核对区块链与币种</div>
      <div class=chain-info>区块链：波场 TRON　币种：USDT</div>

      <div class=qr-wrap>
        <img src="${esc(APP_CONFIG.qrImage)}" alt="USDT TRC20 收款二维码">
      </div>

      <div class=address-box>
        <span id=walletAddress>${esc(APP_CONFIG.walletAddress)}</span>
        <button class=secondary-btn id=copyAddress>复制</button>
      </div>

      <div class=modal-actions>
        <button class=secondary-btn id=cancelPayment>取消</button>
        <button class=primary-btn id=paidBtn>我已付款</button>
      </div>

      <p class=small>付款后点击我已付款，系统会把订单标记为待核验，并尝试调用链上监听功能。</p>
    </div>
  `)

  activePaymentTimer = setInterval(() => {
    remaining -= 1
    const minutes = Math.floor(remaining / 60)
    const seconds = remaining % 60
    const element = $('#countdownText')

    if(element) element.textContent = `${minutes}分${String(seconds).padStart(2,'0')}秒`

    if(remaining <= 0){
      clearInterval(activePaymentTimer)
      activePaymentTimer = null
      if(element) element.textContent = '订单已过期'
    }
  }, 1000)

  $('#copyAddress').onclick = async () => {
    try{
      await navigator.clipboard.writeText(APP_CONFIG.walletAddress)
      alert('地址已复制')
    }catch(error){
      alert('复制失败，请手动复制地址')
    }
  }

  $('#cancelPayment').onclick = closeModal

  $('#paidBtn').onclick = async () => {
    const button = $('#paidBtn')
    button.disabled = true
    button.textContent = '正在提交...'

    await updatePaymentStatus(order)

    const index = state.orders.findIndex(item => item.no === order.no)
    if(index >= 0) state.orders[index].status = '待核验'
    saveLocalOrders()

    await loadOrders()
    openOrders()
  }
}

async function openOrders(){
  const user = await requireLogin('请先登录或注册，再查看订单。')
  if(!user) return

  await loadOrders()

  const rows = state.orders.length ? state.orders.map(order => `
    <div class=order-row>
      <strong>${esc(order.product)}</strong>
      <div class=small>${esc(order.no)} · ${esc(order.created)}</div>
      <div>金额：${formatMoney(order.amount)} USDT　状态：${esc(order.status)}</div>
    </div>
  `).join('') : '暂无订单'

  openModal(`<h3>订单记录</h3>${rows}`)
}

async function openRecharge(){
  const user = await requireLogin('请先登录或注册，再充值。')
  if(!user) return

  openModal(`
    <h3>账户充值</h3>
    <div class=pay-box>
      <p>充值方式：USDT TRC20</p>
      <p class=small>创建充值单后，请按照页面显示的地址和金额付款。</p>
    </div>
    <div class=form-row>
      <label>充值金额</label>
      <input id=rechargeAmount type=number min=1 step=0.01 placeholder=例如 20>
    </div>
    <div class=modal-actions>
      <button class=primary-btn id=createRecharge>生成充值单</button>
    </div>
  `)

  $('#createRecharge').onclick = async () => {
    const amount = Number($('#rechargeAmount').value)
    if(!Number.isFinite(amount) || amount <= 0){
      alert('请输入正确金额')
      return
    }

    const button = $('#createRecharge')
    button.disabled = true
    button.textContent = '正在创建...'

    const rechargeNumber = 'RC' + Date.now()
    const roundedAmount = Number(amount.toFixed(2))

    try{
      const {data, error} = await supabaseClient
        .from('recharge_requests')
        .insert({
          recharge_number: rechargeNumber,
          user_id: user.id,
          amount: roundedAmount,
          status: 'pending'
        })
        .select('*')
        .single()

      if(error) throw error

      const order = normalizeRemoteOrder(data)
      order.type = 'recharge'
      state.orders.unshift(order)
      openPayment(order)
    }catch(error){
      button.disabled = false
      button.textContent = '生成充值单'
      alert('创建充值单失败：' + error.message)
    }
  }
}

async function openLedger(){
  const user = await requireLogin('请先登录或注册，再查看余额明细。')
  if(!user) return

  if(!supabaseClient || !state.remoteLedgerAvailable){
    openModal('<h3>余额明细</h3><div class=pay-box>余额明细表暂未配置。</div>')
    return
  }

  try{
    const {data, error} = await supabaseClient
      .from('ledger_entries')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', {ascending:false})

    if(error) throw error

    const rows = data?.length ? data.map(entry => `
      <div class=order-row>
        <strong>${esc(entry.description || entry.type || '余额变动')}</strong>
        <div class=small>${entry.created_at ? new Date(entry.created_at).toLocaleString() : ''}</div>
        <div>${Number(entry.amount) >= 0 ? '+' : ''}${formatMoney(entry.amount)} USDT</div>
      </div>
    `).join('') : '暂无余额明细'

    openModal(`<h3>余额明细</h3>${rows}`)
  }catch(error){
    state.remoteLedgerAvailable = false
    openModal('<h3>余额明细</h3><div class=pay-box>余额明细表暂未配置。</div>')
  }
}

function openContact(){
  openModal(`
    <h3>联系客服</h3>
    <div class=pay-box>
      <p>Telegram：${esc(APP_CONFIG.supportTelegram)}</p>
      <p>邮箱：${esc(APP_CONFIG.supportEmail)}</p>
    </div>
    <p class=small>客服信息统一放在 app.js 顶部的 APP_CONFIG 中。</p>
  `)
}

function openSiteInfo(){
  openModal(`
    <h3>站点资讯</h3>
    <div class=pay-box>
      北辰出海提供合法的数字服务、资料优化、翻译与技术咨询。
    </div>
  `)
}

function bindPageEvents(){
  const modalClose = $('#modalClose')
  const modalBackdrop = $('#modalBackdrop')
  const rechargeButton = $('#rechargeBtn')
  const contactButton = $('#contactBtn')
  const heroContactButton = $('#heroContactBtn')
  const ordersButton = $('#ordersBtn')
  const ledgerButton = $('#ledgerBtn')
  const tgButton = $('#tgBtn')
  const siteInfoButton = $('#siteInfoBtn')
  const userButton = $('#userBtn')
  const themeButton = $('#themeBtn')
  const menuButton = $('#menuBtn')
  const closeNotice = $('#closeNotice')
  const searchInput = $('#searchInput')
  const logoutButton = $('.logout')

  if(modalClose) modalClose.onclick = closeModal
  if(modalBackdrop) modalBackdrop.onclick = event => {
    if(event.target.id === 'modalBackdrop') closeModal()
  }
  if(rechargeButton) rechargeButton.onclick = openRecharge
  if(contactButton) contactButton.onclick = openContact
  if(heroContactButton) heroContactButton.onclick = openContact
  if(ordersButton) ordersButton.onclick = openOrders
  if(ledgerButton) ledgerButton.onclick = openLedger
  if(tgButton) tgButton.onclick = openContact
  if(siteInfoButton) siteInfoButton.onclick = openSiteInfo
  if(userButton) userButton.onclick = openAccount
  if(themeButton) themeButton.onclick = () => document.body.classList.toggle('dark')
  if(menuButton) menuButton.onclick = () => {
    const sidebar = $('.sidebar')
    if(sidebar) sidebar.classList.toggle('open')
  }
  if(closeNotice) closeNotice.onclick = () => {
    const notice = $('.notice')
    if(notice) notice.remove()
  }
  if(searchInput){
    searchInput.addEventListener('keydown', event => {
      if(event.key === 'Enter'){
        state.query = event.target.value.trim()
        renderProducts()
      }
    })
  }
  if(logoutButton) logoutButton.onclick = logoutAccount
}

async function initializeSupabase(){
  if(!window.supabase || !window.SUPABASE_URL || !window.SUPABASE_KEY){
    console.warn('Supabase SDK 或配置未加载')
    setUserDisplay(null)
    return
  }

  try{
    supabaseClient = window.supabase.createClient(
      window.SUPABASE_URL,
      window.SUPABASE_KEY
    )

    await loadCatalog()

    supabaseClient.auth.onAuthStateChange(async (_event, session) => {
      state.user = session?.user || null
      setUserDisplay(state.user)

      if(state.user){
        await refreshAccountData()
      }else{
        state.isAdmin = false
        state.balance = 0
        state.orders = []
        renderAll()
      }
    })

    state.user = await getCurrentUser()
    setUserDisplay(state.user)

    if(state.user){
      await refreshAccountData()
    }
  }catch(error){
    console.warn('Supabase 初始化失败：', error.message)
    supabaseClient = null
    state.user = null
    setUserDisplay(null)
  }
}

async function startApp(){
  bindPageEvents()
  renderAll()
  await initializeSupabase()
}

startApp()
