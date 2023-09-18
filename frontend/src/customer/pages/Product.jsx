import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import { styled } from "styled-components";
import { ToolOutlined, LoadingOutlined } from "@ant-design/icons";
import Button from "../components/Button";
import DescShipping from "../components/DescShipping";
import Tips from "../components/Tips";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { visibilityCart } from "../providers/cartSlice";

const settingsToast = {
  position: "top-right",
  autoClose: 4000,
  hideProgressBar: true,
  theme: "colored",
};

function Product() {
  const dispatch = useDispatch();
  const [slider2, setSlider2] = useState(null);
  const [desc, setDesc] = useState("desc");
  const [loadingDesc, setLoadingDesc] = useState(false);
  const [color, setColor] = useState({ name: null, id: null });
  const [sizeId, setSizeId] = useState();

  const handleClickSize = (e) => {
    setSizeId(e.target.id);
  };

  const handleClickColor = (e, name) => {
    setColor({ id: e.target.id, name: name });
  };

  const handleSubmit = () => {
    if (color.name === null || color.id === null) {
      toast.error(
        <p style={{ fontSize: "14px", margin: 0, padding: 0 }}>
          Vui lòng chọn màu sản phẩm
        </p>,
        settingsToast
      );
      return;
    } else if (!sizeId) {
      toast.error(
        <p style={{ fontSize: "14px", margin: 0, padding: 0 }}>
          Vui lòng chọn kích thước sản phẩm
        </p>,
        settingsToast
      );
      return;
    }
    dispatch(visibilityCart());
  };
  return (
    <Wrapper>
      <Row>
        <Col sm="2">
          <Slider
            arrows={false}
            vertical
            verticalSwiping
            slidesToShow={3}
            slidesToScroll={1}
            focusOnSelect
            asNavFor={slider2}
          >
            <div className="vertical">
              <div className="relative"></div>
              <img
                src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/092023/1694709923592.jpeg"
                alt="SMART TEE - FIT"
              />
            </div>

            <div className="vertical">
              <div className="relative"></div>
              <img
                src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/092023/1694709896321.jpeg"
                alt="SMART TEE - FIT"
              />
            </div>

            <div className="vertical">
              <div className="relative"></div>
              <img
                src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/092023/1694707290525.jpeg"
                alt="SMART TEE - FIT"
              />
            </div>

            <div className="vertical">
              <div className="relative"></div>
              <img
                src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/092023/1694707309221.jpeg"
                alt="SMART TEE - FIT"
              />
            </div>

            <div className="vertical">
              <div className="relative"></div>
              <img
                src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/092023/1694707319437.jpeg"
                alt="SMART TEE - FIT"
              />
            </div>
          </Slider>
        </Col>
        <Col sm="6">
          <Slider
            ref={(slider) => setSlider2(slider)}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay
            autoplaySpeed={2000}
            arrows={false}
            className="horizontal"
          >
            <img
              src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/092023/1694709923592.jpeg"
              alt="SMART TEE - FIT"
            />
            <img
              src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/092023/1694709896321.jpeg"
              alt="SMART TEE - FIT"
            />
            <img
              src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/092023/1694707290525.jpeg"
              alt="SMART TEE - FIT"
            />
            <img
              src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/092023/1694707309221.jpeg"
              alt="SMART TEE - FIT"
            />
            <img
              src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/092023/1694707319437.jpeg"
              alt="SMART TEE - FIT"
            />
          </Slider>
        </Col>
        <Col sm="4" className="infor">
          <Name>
            <h1>Smart tee - fit</h1>
          </Name>
          <Price>
            <h1>299,000</h1>
          </Price>
          <Exclusive>
            <h5>Ưu đãi đọc quyền</h5>
            <ul>
              <li>Freeship toàn quốc cho đơn hàng từ 499K.</li>
              <li>Đổi hàng trong vòng 30 ngày.</li>
              <li>Ưu đãi hạng thành viên giảm 15%, 20%, 25%.</li>
            </ul>
          </Exclusive>
          <Color>
            <h4>
              Chọn Màu: <strong>{color.name}</strong>
            </h4>
            <ul>
              <li
                id="1"
                className={color.id === "1" && "active"}
                onClick={(e) => {
                  handleClickColor(e, "Trắng Ngà");
                }}
                style={{
                  backgroundImage: `url("https://cdn.ssstutter.com/products/66z6ao28eNQDG839/092023/1694750900787.jpeg")`,
                }}
              />
              <li
                id="2"
                className={color.id === "2" && "active"}
                onClick={(e) => {
                  handleClickColor(e, "Oliu");
                }}
                style={{
                  backgroundImage: `url("https://cdn.ssstutter.com/products/66z6ao28eNQDG839/092023/1694750906701.jpeg")`,
                }}
              />
              <li
                id="3"
                className={color.id === "3" && "active"}
                onClick={(e) => {
                  handleClickColor(e, "Đen");
                }}
                style={{
                  backgroundImage: `url("https://cdn.ssstutter.com/products/66z6ao28eNQDG839/092023/1694750906701.jpeg")`,
                }}
              />
              <li
                id="4"
                className={color.id === "4" && "active"}
                onClick={(e) => {
                  handleClickColor(e, "Xanh Lơ");
                }}
                style={{
                  backgroundImage: `url("https://cdn.ssstutter.com/products/66z6ao28eNQDG839/092023/1694750915741.jpeg")`,
                }}
              />
            </ul>
          </Color>
          <Size>
            <h4>
              <div>
                <h4 className="chose">Chọn Size</h4>
                <h4 className="seen">
                  Bảng Size <ToolOutlined />
                </h4>
              </div>
            </h4>
            <ul>
              <li
                id="1"
                className={sizeId === "1" && "active"}
                onClick={handleClickSize}
              >
                0
              </li>
              <li
                id="2"
                className={sizeId === "2" && "active"}
                onClick={handleClickSize}
              >
                1
              </li>
              <li
                id="3"
                className={sizeId === "3" && "active"}
                onClick={handleClickSize}
              >
                2
              </li>
              <li
                id="4"
                className={sizeId === "4" && "active"}
                onClick={handleClickSize}
              >
                3
              </li>
            </ul>
          </Size>

          <div className="btn-submit">
            <Button black onClick={handleSubmit}>
              Thêm Vào giỏ
            </Button>
          </div>

          <Description>
            {loadingDesc && (
              <div className="loading">
                <LoadingOutlined />
              </div>
            )}
            <ul>
              <li
                className={desc === "desc" && "active"}
                onClick={() => {
                  if (desc !== "desc") {
                    setLoadingDesc(true);
                    setDesc("desc");
                    setTimeout(() => {
                      setLoadingDesc(false);
                    }, 500);
                  }
                }}
              >
                Mô tả
              </li>
              <li
                className={desc === "shipping" && "active"}
                onClick={() => {
                  setDesc("shipping");
                }}
              >
                Giao hàng và thanh toán
              </li>
              <li
                className={desc === "tips" && "active"}
                onClick={() => {
                  setDesc("tips");
                }}
              >
                Tips
              </li>
            </ul>
            <div className="content">
              {desc === "desc" && !loadingDesc && (
                <ul
                  class="cdx-block cdx-list cdx-list--unordered"
                  contenteditable="false"
                >
                  <li class="cdx-list__item">Form áo: Regular</li>
                  <li class="cdx-list__item">
                    Chất liệu: Len lông thỏ <b>xuất Úc</b>,{" "}
                    <b>mát &amp; không nhăn</b>.
                  </li>
                  <li class="cdx-list__item">Áo cổ tròn, tay raglan.</li>
                  <li class="cdx-list__item">
                    Có hình <b>thêu chữ S</b> ở giữa thân trước của áo
                    <br />
                  </li>
                  <li class="cdx-list__item">
                    Có phối viền tiệp màu hình thêu ở gấu áo
                    <br />
                  </li>
                </ul>
              )}
              {desc === "shipping" && <DescShipping />}
              {desc === "tips" && <Tips />}
            </div>
          </Description>
        </Col>
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px 112px 40px 112px;
  .infor {
    padding: 1rem;
  }
  .horizontal {
    img {
      width: 100%;
    }
  }
  .vertical {
    position: relative;
    cursor: pointer;
    img {
      width: 100%;
    }
    .relative {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.4s;
      top: 0;
      width: 100%;
      height: 100%;
      &:hover {
        background-color: rgba(0, 0, 0, 0);
      }
    }
  }
  .btn-submit {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  h1 {
    margin-bottom: 0;
  }
`;

const Name = styled.div`
  margin-bottom: 1rem;
  h1 {
    font-size: 24px;
    font-weight: 400;
    text-transform: uppercase;
  }
`;
const Price = styled.div`
  margin-bottom: 1rem;

  h1 {
    font-size: 30px;
    font-weight: 700;
  }
`;
const Exclusive = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px dashed rgb(22, 163, 74);
  h5 {
    text-transform: uppercase;
    color: rgb(22, 163, 74);
    font-size: 14px;
    font-weight: 600;
  }
  ul {
    padding-left: 1rem;

    li {
      font-size: 14px;
      line-height: 1.25rem;
    }
  }
`;
const Color = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  h4 {
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 8px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 1rem;
    li {
      padding-top: 100%;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      cursor: pointer;
      border-width: 2px;
      border-style: solid;
      border-color: transparent;
      &.active {
        border-color: #000;
      }
    }
  }
`;

const Size = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  h4 {
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 0;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .seen {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border-bottom: 1px solid #000;
        cursor: pointer;
      }
    }
  }
  ul {
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));
    gap: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    li {
      cursor: pointer;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-width: 1px;
      border-color: transparent;
      border-style: solid;

      &.active {
        border-color: #000;
      }
    }
  }
`;

const Description = styled.div`
  position: relative;
  .loading {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 400%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 20px;
    }
  }
  > ul {
    padding: 0 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e5e7eb;
    li {
      color: #0000004d;
      padding: 4px 0;
      cursor: pointer;

      &.active {
        color: #000;
      }
    }
  }
  .content {
    ul {
      padding: 6px 0 6px 40px;
      li {
        list-style: disc;
        padding: 5.5px 0 5.5px 3px;
        line-height: 1.6em;
        font-size: 14px;
      }
    }
  }
`;
export default Product;
