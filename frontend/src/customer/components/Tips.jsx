import React from "react";
import styled from "styled-components";

const Tips = () => {
  return (
    <Wrapper>
      <h3 class="mt-4">bảo quản</h3>
      <p>*Lưu ý</p>
      <ul class="px-4 py-2">
        <li class="p-2">
          Không để quần áo ở nơi ẩm và nên giặt ngay sau khi sử dụng để tránh ẩm
          mốc
        </li>
        <li class="p-2">Không giặt chung áo trắng với quần áo màu</li>
        <li class="p-2">
          Không nên giặt trong nước nóng quá 40 độ để tránh bị giãn và mất form
        </li>
        <li class="p-2">
          Không đổ trực tiếp bột giặt lên quần áo khi giặt để tránh bị phai và
          loang màu
        </li>
        <li class="p-2">Không ngâm trong xà phòng quá lâu để tránh bạc màu</li>
      </ul>
      <p>*Mẹo giữ quần áo lâu mới</p>
      <ul class="list-decimal px-4 py-2">
        <li class="p-2">
          Nên giặt áo bằng nước lạnh hoặc nước hơi ấm, nước nóng sẽ làm vải áo
          giãn ra
        </li>
        <li class="p-2">
          Phơi áo dưới nắng nhẹ, tránh nắng gắt để áo không bị bạc màu
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h3 {
    font-size: 16px;
    text-transform: capitalize;
    font-weight: 600;
  }
  p {
    font-size: 14px;
    margin-bottom: 0;
  }
  li {
    font-size: 12px;
    line-height: 1rem;
    list-style: decimal;
  }
`;

export default Tips;
