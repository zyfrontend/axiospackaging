import http from './http';
import { useStorageAsync } from '@vueuse/core';

// 登录api
export async function userLogin(data) {
  try {
    const res = await http(
      {
        url: '/api/common/login',
        method: 'post',
        data: data
      },
      {
        // 自定义配置
        loading: false
      }
    );
    useStorageAsync('token', res.data['x-token']);
    await getInformation();
  } catch (error) {
    console.log(error);
  }
}

// 获取配置信息
export async function getInformation(data) {
  try {
    const res = await http({
      url: '/api/123/123',
      method: 'GET',
      data: data
    });
    console.log(res);
    useStorageAsync('res', res.data);
  } catch (error) {
    console.log(error);
  }
}

// 测试下拉加载更多列表信息

export async function getList(data) {
  try {
    const res = await http({
      url: '/api/123',
      method: 'GET',
      data: data
    });
    return res;
  } catch (error) {
    console.log(error);
  }
}
