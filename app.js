const categories = [
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

const products = [
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
            <button class=buy-btn data-buy=${p.id}>${p.category.includes('定制服务')?'联系客服':(p.stock===0?'查看库存':'▢ 购买')}</button>
          </div>`).join('')}
      </div>
    </section>`
  }).join('') || `<div class=pay-box>没有找到相关商品</div>`

  $$('[data-buy]').forEach(btn=>btn.onclick=()=>{
    const p=products.find(x=>x.id===Number(btn.dataset.buy))
    if(p.category.includes('定制服务')) return openContact()
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
