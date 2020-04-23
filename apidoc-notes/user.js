
/**
 * @apiDefine CommonResponse
 * @apiVersion 0.1.0
 *
 *@apiSuccessExample Response(成功示例)：
 * {
 *     success: ,true,
 *     data:{},
 *     message: '请求成功'
 * }
 * @apiErrorExample  Response (失败示例):
 *     {
 *       success: false,
 *       message: '服务器忙'
 *     }
 */


// ------------------------------------------------------------------------------------------
// Current Permissions.
// ------------------------------------------------------------------------------------------
/**
 * @apiDefine admin Admin access rights needed.
 * Optionally you can write here further Informations about the permission.
 *
 * An "apiDefine"-block can have an "apiVersion", so you can attach the block to a specific version.
 *
 * @apiVersion 0.1.0
 */

/**
 * @api {post} /listArticle 文章列表
 * @apiVersion 0.1.0
 * @apiName listArticle
 * @apiGroup 文章管理
 *
 * @apiDescription 文章列表查询.
 *
 *@apiParam {String} page 页码.
 *@apiParam {String} pageSize 每一页数据量.
 *@apiSuccess {String} total 总条数.
 *@apiSuccess {Array} data  文章列表.
 *@apiSuccess {String} page  页码.
 */

/**
 * @api {post} /register 注册
 * @apiVersion 0.1.0
 * @apiName register
 * @apiGroup 用户相关
 *
 * @apiDescription 用户注册接口.
 *
 * @apiParam {String} user_name 用户名（3至10个英文或中文字符）.
 * @apiParam {String} pass_word 用户密码（6至12个英文和数字组成的字符）.
 * @apiParam {String} user_email 用户邮箱.
 *
 */


/**
 * @api {post} /login 登录
 * @apiVersion 0.1.0
 * @apiName login
 * @apiGroup 用户相关
 *
 * @apiDescription 用户登录接口，返回值包括token和用户信息.
 *
 *@apiParam {String} user_name 用户名.
 *@apiParam {String} pass_word 用户密码.
 *@apiSuccess {String} token 用户凭证，后续接口，token统一放在Request headers里面传给服务端.
 *@apiSuccess {Object} userInfo  用户信息.
 */



