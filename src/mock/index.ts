import Mock from 'mockjs';

const { Random } = Mock;

interface Item {
  name: string,
  email: string,
  address: string
}
const dataList: Item[] = [];
for (let i = 0; i < 20; i++) {
  dataList.push(Mock.mock({
    name: Random.cname(),
    email: '@email',
    address: Random.county(true),
  }));
}
export default dataList;
