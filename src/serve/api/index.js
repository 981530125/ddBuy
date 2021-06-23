import ajax from './ajax'

// 1. 定义基础路径
// const BASE_URL = 'http://api.7-orange.cn:7300/mock/5def6a2d448e330a1116366e/api/'
export const BASE_URL = 'http://49.232.168.196:99/'
/*****Home 模块*******/
export const getHomeData = () => ajax(BASE_URL + 'homeApi');
// 特色专区
export const getHomeSpecialZone = () => ajax(BASE_URL + 'homeApi/specialZone');

/***** 分类(Category) 模块 *******/
// Category 列表页面数据
export const getCategoryData = (data) => ajax(BASE_URL + 'homeApi/categories',{data},'POST');

// Category 右边内容页面数据 需要根据左边点击传值
export const getCategoryDetailData = (data) => ajax(BASE_URL + 'homeApi/categoriesdetail',{
data
}, 'POST');

/***** 吃什么 模块 *******/
// 今日菜单的所有菜单分类
export const getTodayMenuCategoryList = () => ajax(BASE_URL + 'recipe/allScene',{},'POST');
// 菜品菜单
export const getTodayMenuDetail = (params) => ajax(BASE_URL + 'recipe/menulist',{params},'POST');

/***** 购物车页面 猜你喜欢*********/
export const getGuessYouLike = () => ajax(BASE_URL + 'cart/youlike',{},'POST');

/***** 下单*********/
export const createOrder = (params) => ajax(BASE_URL + 'order/createOrder',{params},'POST');

/***** 添加地址*********/
export const createAddress = (params) => ajax(BASE_URL + 'address/createAddress',{params},'POST');
// 订单列表
export const getOrderlist = (params) => ajax(BASE_URL + 'order/getOrderlist',{params},'POST');

/***** 登录界面接口 *********/
// 1.获取手机验证码(GET)
// Easy Mock 模拟发送验证码 
export const getPhoneCaptcha = (phoneNumber) => ajax(BASE_URL + 'send_code', {
    phoneNumber
});

// 2.手机验证码登录(POST)
// Easy Mock 模拟用户登录
export const phoneCaptchaLogin = (phone, captcha) => ajax(BASE_URL + 'login_code', {
    phone,
    captcha
}, 'POST');

// 3.账号密码登录(POST)
export const pwdLogin = (userName, pwd, captcha) => ajax(BASE_URL + 'login_pwd', {
    userName,
    pwd,
    captcha
}, 'POST');

/***** 个人中心 *********/
// 1.绿卡Vip
export const getVipContent = () => ajax(BASE_URL + 'vip');