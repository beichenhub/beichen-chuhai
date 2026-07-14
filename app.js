const categories = [
  { name: 'theleague', color: '#16191e', icon: 'L' },
  { name: 'Match', color: '#4659d6', icon: 'M' },
  { name: '2RedBeans', color: '#ee4a95', icon: '2R' },
  { name: '定制号价格表-下单联系客服发货', color: '#1d1f24', icon: '北' },
  { name: '男同女同系列', color: '#c64fad', icon: 'S' },
  { name: 'Tandem', color: '#4bb7c1', icon: 'T' },
  { name: 'POF', color: '#ec845c', icon: 'P' },
  { name: 'hellotalk', color: '#4167d9', icon: 'H' },
  { name: 'Ourtime', color: '#e36c8f', icon: 'O' }
]

const products = [
  ['theleague','The League 新手使用指导','注册流程、会员功能、隐私设置与常见问题说明',6,99],
  ['theleague','The League 个人资料文字优化','仅基于本人真实信息优化简介、兴趣与开场内容',8,35],
  ['theleague','The League 照片排序建议','提供照片顺序、构图与资料一致性建议',5,50],
  ['theleague','The League 订阅方案咨询','不同会员方案、功能差异与取消方式说明',4,99],

  ['Match','Match 新手使用教程','平台功能、订阅设置、隐私选项与安全提示',5,99999],
  ['Match','Match 女性资料优化 40岁以上','基于本人真实资料优化简介、兴趣与关系目标',10,25],
  ['Match','Match 女性资料优化 30至39岁','基于本人真实资料优化简介与开场内容',9,18],
  ['Match','Match 女性资料优化 50岁以上','突出生活方式、兴趣与长期关系目标',12,15],
  ['Match','Match 男性资料优化 50岁以上','基于本人真实资料优化职业、兴趣与关系目标',12,20],
  ['Match','Match 男性资料优化 35至49岁','优化个人简介、照片顺序与第一条消息',10,28],
  ['Match','Match 订阅与退款咨询','订阅方案、自动续费与取消流程说明',4,99],
  ['Match','Match 账号安全检查','帮助检查隐私设置、登录保护与可疑链接风险',6,40],

  ['2RedBeans','2RedBeans 新手使用指导','平台功能、资料填写与隐私设置说明',5,99],
  ['2RedBeans','2RedBeans 中文资料优化','基于本人真实经历优化中文简介与兴趣描述',7,30],
  ['2RedBeans','2RedBeans 英文资料优化','基于本人真实信息优化英文简介与开场内容',8,24],
  ['2RedBeans','2RedBeans 照片与资料一致性建议','检查照片、年龄、职业与简介表达是否协调',5,45],

  ['定制号价格表-下单联系客服发货','定制服务需求评估','先由客服确认需求范围与交付方式',10,99],
  ['定制号价格表-下单联系客服发货','多平台资料统一优化','统一不同平台中的真实个人资料与表达风格',18,20],
  ['定制号价格表-下单联系客服发货','中英文双语资料包','提供中文与英文两个版本的真实资料文案',15,24],
  ['定制号价格表-下单联系客服发货','一对一使用陪同咨询','按约定时长提供远程操作与使用说明',20,12],

  ['男同女同系列','LGBTQ 平台新手咨询','平台选择、隐私设置与安全使用建议',7,99],
  ['男同女同系列','LGBTQ 个人资料优化','基于本人真实信息优化简介与关系目标',9,26],
  ['男同女同系列','LGBTQ 隐私与安全设置','位置、可见范围、屏蔽与举报功能说明',6,40],

  ['Tandem','Tandem 新手使用指导','学习目标、语言设置与隐私选项说明',4,99],
  ['Tandem','Tandem 中文学习资料优化','优化学习目标、自我介绍与话题标签',6,35],
  ['Tandem','Tandem 英文学习资料优化','基于本人真实学习需求优化英文简介',6,30],
  ['Tandem','Tandem 账号安全检查','检查隐私权限、陌生链接与异常登录风险',5,50],

  ['POF','POF 新手使用指导','功能、会员、隐私与安全设置说明',5,99],
  ['POF','POF 女性资料优化 40岁以上','基于本人真实资料优化简介与关系目标',9,20],
  ['POF','POF 男性资料优化 40岁以上','基于本人真实资料优化职业、兴趣与开场内容',9,20],
  ['POF','POF 第一条消息优化','根据真实资料优化自然开场内容',4,60],

  ['hellotalk','HelloTalk 新手使用指导','学习设置、隐私权限与常见功能说明',4,99],
  ['hellotalk','HelloTalk 中文资料优化','优化学习目标、自我介绍与兴趣标签',6,40],
  ['hellotalk','HelloTalk 英文资料优化','基于本人真实信息优化英文学习资料',6,32],
  ['hellotalk','HelloTalk 安全使用检查','检查隐私设置、骚扰屏蔽与举报功能',5,45],

  ['Ourtime','OurTime 新手使用指导','功能、订阅、隐私与安全设置说明',6,99],
  ['Ourtime','OurTime 女性资料优化 50岁以上','突出真实生活方式、兴趣与长期关系目标',10,22],
  ['Ourtime','OurTime 男性资料优化 50岁以上','优化真实职业、兴趣与关系目标表达',10,22],
  ['Ourtime','OurTime 照片与简介组合建议','提供照片顺序与简介内容的一致性建议',6,36],
  ['Ourtime','OurTime 订阅与取消咨询','会员功能、自动续费与取消流程说明',4,99]
].map((p,i)=>({id:i+1,category:p[0],name:p[1],desc:p[2],price:p[3],stock:p[4]}))

const state = {
  category: '全部商品',
  query: '',
  balance: Number(localStorage.getItem('bc_balance') || 0),
  orders: JSON.parse(localStorage.getItem('bc_orders') || '[]')
}

const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)
const categoryNav = $('#categoryNav')
const categoryChips = $('#categoryChips')
const productSections = $('#productSections')

function esc(v=''){
  return String(v).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]))
}

function navButton(c){
  return `<button class=nav-item data-category="${esc(c.name)}">
    <span class=dot-logo style="background:${c.color}">${esc(c.icon)}</span>
    <span>${esc(c.name)}</span>
  </button>`
}

function renderNav(){
  categoryNav.innerHTML = categories.map(navButton).join('')
  categoryChips.innerHTML = [
    `<button class="chip ${state.category==='全部商品'?'active':''}" data-category=全部商品>▦ 所有商品</button>`,
    ...categories.map(c=>`<button class="chip ${state.category===c.name?'active':''}" data-category="${esc(c.name)}">${esc(c.icon)} ${esc(c.name)}</button>`)
  ].join('')

  $$('[data-category]').forEach(btn=>{
    btn.onclick=()=>{
      state.category=btn.dataset.category
      renderAll()
      if(innerWidth<820) $('.sidebar').classList.remove('open')
    }
  })
}

function renderProducts(){
  let list=products.filter(p=>{
    const byCat=state.category==='全部商品'||p.category===state.category
    const q=state.query.toLowerCase()
    const byQ=!q||p.name.toLowerCase().includes(q)||p.desc.toLowerCase().includes(q)||p.category.toLowerCase().includes(q)
    return byCat&&byQ
  })

  const grouped={}
  list.forEach(p=>(grouped[p.category]??=[]).push(p))
  productSections.innerHTML=Object.keys(grouped).map(cat=>{
    const c=categories.find(x=>x.name===cat)
    return `<section>
      <div class=section-title><span>◉</span>${esc(cat)}</div>
      <div class=product-list>
        ${grouped[cat].map(p=>`
          <div class=product-card>
            <div class=product-icon style="background:${c?.color||'#222'}">${esc(c?.icon||'北')}</div>
            <div><div class=product-name>${esc(p.name)}</div><div class=product-desc>${esc(p.desc)}</div></div>
            <div class=product-price>$${p.price.toFixed(2)}</div>
            <div class=stock>库存 ${p.stock}</div>
            <button class=buy-btn data-buy=${p.id}>${p.category.includes('定制号价格表')?'联系客服':(p.stock===0?'查看库存':'▢ 购买')}</button>
          </div>`).join('')}
      </div>
    </section>`
  }).join('') || `<div class=pay-box>没有找到相关商品</div>`

  $$('[data-buy]').forEach(btn=>btn.onclick=()=>{
    const p=products.find(x=>x.id===Number(btn.dataset.buy))
    if(p.category.includes('定制号价格表')) return openContact()
    if(p.stock===0) return openModal('<h3>库存提醒</h3><div class=pay-box>当前服务名额已满，请稍后查看或联系客服预约。</div>')
    openBuy(p.id)
  })
}

function renderAll(){
  $('#balanceValue').textContent=state.balance.toFixed(2)
  renderNav()
  renderProducts()
}

function openModal(html){
  $('#modalContent').innerHTML=html
  $('#modalBackdrop').classList.add('show')
}
function closeModal(){ $('#modalBackdrop').classList.remove('show') }
$('#modalClose').onclick=closeModal
$('#modalBackdrop').onclick=e=>{ if(e.target.id==='modalBackdrop') closeModal() }

function openBuy(id){
  const p=products.find(x=>x.id===id)
  openModal(`
    <h3>确认订单</h3>
    <div class=pay-box>
      <strong>${esc(p.name)}</strong>
      <div class=small>${esc(p.desc)}</div>
      <p>金额：<b>$${p.price.toFixed(2)}</b></p>
    </div>
    <div class=form-row><label>联系账号</label><input id=contactValue placeholder=填写 Telegram、邮箱或其他联系方式></div>
    <div class=form-row><label>需求说明</label><textarea id=noteValue rows=4 placeholder=填写合法且真实的服务需求></textarea></div>
    <div class=modal-actions>
      <button class=secondary-btn onclick=closeModal()>取消</button>
      <button class=primary-btn id=confirmOrder>创建订单</button>
    </div>`)
  $('#confirmOrder').onclick=()=>{
    const contact=$('#contactValue').value.trim()
    if(!contact){alert('请填写联系方式');return}
    const order={
      no:'BC'+Date.now(),
      product:p.name,
      amount:p.price,
      contact,
      note:$('#noteValue').value.trim(),
      status:'待支付',
      created:new Date().toLocaleString()
    }
    state.orders.unshift(order)
    localStorage.setItem('bc_orders',JSON.stringify(state.orders))
    openPayment(order)
  }
}

function openPayment(order){
  const address='TBrXpCm2bmo4SXrTgPVSWNAmE3KxmQTr3n'
  let remaining=15*60
  openModal(`
    <h3>USDT TRC20 支付</h3>
    <div class=payment-page>
      <div class=payment-summary>
        <div><span class=small>订单号</span><strong>${esc(order.no)}</strong></div>
        <div><span class=small>应付金额</span><strong>${order.amount.toFixed(2)} USDT</strong></div>
      </div>

      <div class=countdown-wrap>
        剩余时间：<strong id=countdownText>15分00秒</strong>
      </div>

      <div class=chain-tip>请仔细核对区块链与币种，避免支付失败</div>
      <div class=chain-info>区块链：波场 TRON　币种：USDT</div>

      <div class=qr-wrap>
        <img src=trc20-qr.png alt="USDT TRC20 收款二维码">
      </div>

      <div class=address-box>
        <span id=walletAddress>${esc(address)}</span>
        <button class=secondary-btn id=copyAddress>复制</button>
      </div>

      <div class=modal-actions>
        <button class=secondary-btn id=cancelPayment>取消</button>
        <button class=primary-btn id=paidBtn>我已付款</button>
      </div>

      <p class=small>该版本采用人工核验。付款完成后点击我已付款，后台核对到账后再更新余额或订单状态。</p>
    </div>`)

  const timer=setInterval(()=>{
    remaining--
    const m=Math.floor(remaining/60)
    const s=remaining%60
    const el=$('#countdownText')
    if(el) el.textContent=`${m}分${String(s).padStart(2,'0')}秒`
    if(remaining<=0){
      clearInterval(timer)
      if(el) el.textContent='订单已过期'
    }
  },1000)

  $('#copyAddress').onclick=async()=>{
    await navigator.clipboard.writeText(address)
    alert('地址已复制')
  }
  $('#cancelPayment').onclick=()=>{
    clearInterval(timer)
    closeModal()
  }
  $('#paidBtn').onclick=()=>{
    clearInterval(timer)
    const idx=state.orders.findIndex(x=>x.no===order.no)
    if(idx>=0) state.orders[idx].status='待人工核验'
    localStorage.setItem('bc_orders',JSON.stringify(state.orders))
    openOrders()
  }
}

function openOrders(){
  const rows=state.orders.length?state.orders.map(o=>`
    <div class=order-row>
      <strong>${esc(o.product)}</strong>
      <div class=small>${esc(o.no)} · ${esc(o.created)}</div>
      <div>金额：${o.amount.toFixed(2)} USDT　状态：${esc(o.status)}</div>
    </div>`).join(''):'暂无订单'
  openModal(`<h3>订单记录</h3>${rows}`)
}

function openRecharge(){
  openModal(`
    <h3>账户充值</h3>
    <div class=pay-box>
      <p>演示版采用 USDT TRC20 人工核验。</p>
      <p class=small>正式上线前，请在 app.js 中配置你的收款地址，并增加后台审核功能。</p>
    </div>
    <div class=form-row><label>充值金额</label><input id=rechargeAmount type=number min=1 placeholder=例如 20></div>
    <div class=modal-actions><button class=primary-btn id=createRecharge>生成充值单</button></div>`)
  $('#createRecharge').onclick=()=>{
    const amount=Number($('#rechargeAmount').value)
    if(!amount||amount<=0){alert('请输入正确金额');return}
    const order={no:'RC'+Date.now(),product:'账户充值',amount,contact:'当前用户',note:'',status:'待支付',created:new Date().toLocaleString()}
    state.orders.unshift(order)
    localStorage.setItem('bc_orders',JSON.stringify(state.orders))
    openPayment(order)
  }
}

function openContact(){
  openModal(`
    <h3>联系客服</h3>
    <div class=pay-box>
      <p>Telegram：@your_support</p>
      <p>邮箱：support@example.com</p>
    </div>
    <p class=small>请在 app.js 中替换成你的真实客服联系方式。</p>`)
}

$('#rechargeBtn').onclick=openRecharge
$('#contactBtn').onclick=openContact
$('#heroContactBtn').onclick=openContact
$('#ordersBtn').onclick=openOrders
$('#ledgerBtn').onclick=()=>openModal('<h3>余额明细</h3><div class=pay-box>演示版暂未接入真实余额系统</div>')
$('#tgBtn').onclick=openContact
$('#siteInfoBtn').onclick=()=>openModal('<h3>站点资讯</h3><div class=pay-box>北辰出海数字服务商城演示版</div>')
$('#userBtn').onclick=()=>openModal('<h3>账户信息</h3><div class=pay-box>用户名：beichen0001<br>账户类型：演示用户</div>')
$('#themeBtn').onclick=()=>document.body.classList.toggle('dark')
$('#menuBtn').onclick=()=>$('.sidebar').classList.toggle('open')
$('#closeNotice').onclick=()=>$('.notice').remove()
$('#searchInput').addEventListener('keydown',e=>{
  if(e.key==='Enter'){state.query=e.target.value.trim();renderProducts()}
})

renderAll()


// Supabase 登录功能。即使外部 SDK 加载失败，也不会影响原网站功能。
let supabaseClient = null

function setUserDisplay(user){
  const userButton = document.querySelector('#userBtn')
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

async function refreshAuthUser(){
  if(!supabaseClient){
    setUserDisplay(null)
    return
  }

  try{
    const {data, error} = await supabaseClient.auth.getUser()
    if(error) throw error
    setUserDisplay(data.user)
  }catch(error){
    console.warn('读取登录状态失败：', error.message)
    setUserDisplay(null)
  }
}

function openAuthModal(){
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
    <p class=small id=authMessage></p>
  `)

  const message = document.querySelector('#authMessage')

  document.querySelector('#registerAccount').onclick = async () => {
    if(!supabaseClient){
      message.textContent = '登录服务暂时没有加载，请联网后按 Ctrl + F5 刷新。'
      return
    }

    const email = document.querySelector('#authEmail').value.trim()
    const password = document.querySelector('#authPassword').value

    if(!email || password.length < 6){
      message.textContent = '请输入正确邮箱，密码至少6位。'
      return
    }

    message.textContent = '正在注册...'
    const {data, error} = await supabaseClient.auth.signUp({email, password})

    if(error){
      message.textContent = error.message
      return
    }

    if(data.session){
      message.textContent = '注册并登录成功。'
      await refreshAuthUser()
      setTimeout(closeModal, 500)
    }else{
      message.textContent = '注册成功，请检查邮箱确认后再登录。'
    }
  }

  document.querySelector('#loginAccount').onclick = async () => {
    if(!supabaseClient){
      message.textContent = '登录服务暂时没有加载，请联网后按 Ctrl + F5 刷新。'
      return
    }

    const email = document.querySelector('#authEmail').value.trim()
    const password = document.querySelector('#authPassword').value

    if(!email || !password){
      message.textContent = '请输入邮箱和密码。'
      return
    }

    message.textContent = '正在登录...'
    const {error} = await supabaseClient.auth.signInWithPassword({email, password})

    if(error){
      message.textContent = error.message
      return
    }

    message.textContent = '登录成功。'
    await refreshAuthUser()
    setTimeout(closeModal, 500)
  }
}

async function logoutAccount(){
  if(!supabaseClient){
    alert('当前没有连接登录服务')
    return
  }

  const {error} = await supabaseClient.auth.signOut()
  if(error){
    alert(error.message)
    return
  }

  setUserDisplay(null)
  alert('已退出登录')
}

try{
  if(window.supabase && window.SUPABASE_URL && window.SUPABASE_KEY){
    supabaseClient = window.supabase.createClient(
      window.SUPABASE_URL,
      window.SUPABASE_KEY
    )

    // 覆盖演示版账户按钮，但不影响其他原有按钮。
    const accountButton = document.querySelector('#userBtn')
    const logoutButton = document.querySelector('.logout')

    if(accountButton) accountButton.onclick = openAuthModal
    if(logoutButton) logoutButton.onclick = logoutAccount

    supabaseClient.auth.onAuthStateChange(() => {
      setTimeout(refreshAuthUser, 0)
    })

    refreshAuthUser()
  }else{
    console.warn('Supabase SDK 未加载，原网站功能仍可正常使用。')
    setUserDisplay(null)
  }
}catch(error){
  console.warn('Supabase 初始化失败，原网站功能仍可正常使用：', error.message)
  setUserDisplay(null)
}
