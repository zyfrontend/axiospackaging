import http from './index';
import qs from 'qs';
export function getListAPI(paramsList) {
    return http({
        url: '/api/list',
        method: 'get',
    }, {
        repeat_request_cancel: true
    },{
        loading: true,
        text: '获取列表数据....'
    })
}

export function login(paramsList) {
    return http({
        url: '/api/login',
        method: 'post',
        data: paramsList,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        transformRequest: [
            (data) => {
                return qs.stringify(data)
            }
        ],
    });
}