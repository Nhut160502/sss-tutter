import React from "react";
import styled from "styled-components";

const DescShipping = () => {
  return (
    <Wrapper>
      <h3>chính sách giao hàng</h3>
      <table className="table-auto border-collapse border border-slate-500 mt-2">
        <thead>
          <tr>
            <th className="border p-2">khu vực</th>
            <th className="border p-2">phí giao hàng</th>
            <th className="border p-2">thời gian vận chuyển</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">
              Nội thành Hà Nội &amp; TP. Hồ Chí Minh
            </td>
            <td className="border p-2">Đồng giá 30.000Đ</td>
            <td className="border p-2">1-2 ngày làm việc.</td>
          </tr>
          <tr>
            <td className="border p-2">
              Ngoại thành Hà Nội &amp; TP. Hồ Chí Minh
            </td>
            <td className="border p-2">Đồng giá 30.000Đ</td>
            <td className="border p-2">3-7 ngày làm việc.</td>
          </tr>
          <tr>
            <td className="border p-2">Các tỉnh thành khác</td>
            <td className="border p-2">Đồng giá 30.000Đ </td>
            <td className="border p-2">5-7 ngày làm việc.</td>
          </tr>
        </tbody>
      </table>
      <h3 className="mt-4">chính sách thanh toán</h3>
      <p>
        Khách hàng mua hàng tại SSSTUTTER có thể thanh toán bằng 3 hình thức
        sau:
      </p>
      <ul className="px-4 py-2">
        <li className="p-2">
          Trả tiền khi nhận hàng (COD): khi nhận được hàng, người nhận hàng sẽ
          thanh toán trực tiếp cho người giao hàng. Khoản thanh toán bao gồm
          tiền hàng và phí giao hàng cho vận chuyển.
        </li>
        <li className="p-2">Thanh toán qua ví ShopeePay.</li>
        <li className="p-2">
          Thanh toán bằng thẻ ATM nội địa/thẻ thanh toán quốc tế Visa,
          MasterCard.
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 1.25rem;
  padding: 1rem;
  h3 {
    font-size: 16px;
    text-transform: capitalize;
    font-weight: 600;
  }
  th {
    text-transform: uppercase;
    font-size: 12px;
    text-align: center;
  }
  td {
    font-size: 14px;
  }
  p {
    font-size: 14px;
    margin: 0;
  }
  li {
    font-size: 12px;
    list-style: decimal;
  }
`;

export default DescShipping;
