import { Link } from "react-router-dom";
import { styled } from "styled-components";
import {
  MailOutlined,
  PhoneOutlined,
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled,
} from "@ant-design/icons";
function Footer() {
  return (
    <Wrapper>
      <Top>
        <div className="item">
          <h2>ssstutter</h2>
          <h3>
            Với thông điệp "Refined Life", SSStutter mong muốn đem đến cho khách
            hàng một lối sống tinh gọn bằng các sản phẩm thời trang tinh tế.
          </h3>
        </div>
        <div className="item">
          <h2>chi nhánh hà nội</h2>
          <h3>
            105 - D6, ngõ 4B Đặng Văn Ngữ <br />
            70 Tô Hiến Thành
            <br />
            342 Cầu Giấy
            <br />
            46 Đông Các
          </h3>
        </div>
        <div className="item">
          <h2>Chi nhánh tp. Hồ Chí Minh</h2>
          <h3>
            Lầu 1, số 25, Nguyễn Trãi, Q1 <br />
            152 Nguyễn Gia Trí, Bình Thạnh
          </h3>
        </div>
        <div className="item">
          <h2>Chính sách</h2>
          <ul>
            <li>
              <Link>Về sản phẩm</Link>
            </li>
            <li>
              <Link>Chính sách bảo mật</Link>
            </li>
            <li>
              <Link>Chính sách đổi, trả hàng</Link>
            </li>
            <li>
              <Link>Chính sách giao hàng</Link>
            </li>
            <li>
              <Link>Chính sách thanh toán</Link>
            </li>
            <li>
              <Link>Chính sách thành viên</Link>
            </li>
          </ul>
        </div>

        <div className="item">
          <div className="ecommerce">
            <h2>ECOMMERCE</h2>
            <ul>
              <li>
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0,0,256,256"
                    width="25"
                    height="25"
                    fill-rule="nonzero"
                    fill="black"
                  >
                    <g
                      fill="#000000"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
                    </g>
                    <g
                      fill="#ffffff"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M25,1c-5.32713,0 -9.39588,4.95314 -9.83398,11h-10.10742c-1.135,0 -2.05922,0.981 -1.99609,2.11328l1.72461,30.17188c0.14947,2.63699 2.34979,4.71484 4.99023,4.71484h30.44531c2.64119,0 4.84078,-2.07817 4.99023,-4.71484l1.72461,-30.16992c0.06514,-1.13309 -0.86109,-2.11523 -1.99609,-2.11523h-10.10742c-0.43811,-6.04686 -4.50685,-11 -9.83398,-11zM25,3c4.03694,0 7.40892,3.88679 7.83594,9h-15.67188c0.42701,-5.11321 3.799,-9 7.83594,-9zM5.05859,14h10.77344c0.10799,0.01785 0.21818,0.01785 0.32617,0h17.67383c0.10799,0.01785 0.21818,0.01785 0.32617,0h10.7832l-1.72461,30.17188c-0.09054,1.59732 -1.39334,2.82813 -2.99414,2.82813h-30.44531c-1.59956,0 -2.90362,-1.23111 -2.99414,-2.82812l-1.72461,-30.16992zM25.07422,18.00195c-4.314,0 -7.56641,2.68795 -7.56641,6.25195c0,4.03 3.74769,5.39942 7.05469,6.60742c4.004,1.463 6.43555,2.58019 6.43555,5.74219c0,2.442 -2.73089,4.42969 -6.08789,4.42969c-3.755,0 -6.93675,-2.74153 -6.96875,-2.76953l-1.11523,1.64258c0.812,0.658 4.09498,3.10156 8.08398,3.10156c4.52,0 8.06255,-2.8133 8.06055,-6.4043c0,-4.77 -4.10647,-6.2727 -7.73047,-7.5957c-3.583,-1.311 -5.75977,-2.28291 -5.75977,-4.75391c0,-2.478 2.35275,-4.27734 5.59375,-4.27734c2.161,0 4.0415,0.81814 5.0625,1.36914c0.172,0.092 0.62495,0.3642 0.87695,0.5332l1.02148,-1.66211c-0.234,-0.152 -3.11394,-2.21484 -6.96094,-2.21484z"></path>
                      </g>
                    </g>
                  </svg>
                </Link>
              </li>
              <li>
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0,0,256,256"
                    width="25"
                    height="25"
                    fill-rule="nonzero"
                    fill="black"
                  >
                    <g
                      fill="#000000"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
                    </g>
                    <g
                      fill="#ffffff"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <g transform="scale(2.56,2.56)">
                        <path d="M25.99219,17.00195c-0.38691,0 -0.76808,0.10624 -1.10156,0.3125l-16.42578,10.10742c-0.91136,0.56026 -1.46484,1.55416 -1.46484,2.62305v29.08398c0,1.06194 0.553,2.05492 1.45508,2.61523l39.96289,24.80469c0.3319,0.20626 0.70029,0.33968 1.08203,0.4043v0.04688h0.5h0.5v-0.04687c0.38174,-0.06461 0.75013,-0.19804 1.08203,-0.4043l39.96289,-24.80469c0.90208,-0.56032 1.45313,-1.5533 1.45313,-2.61523v-29.08594c0,-1.06889 -0.55348,-2.06083 -1.46484,-2.62109l-16.42383,-10.10742c-0.33202,-0.20535 -0.71456,-0.3125 -1.10156,-0.3125c-0.39037,0 -0.77579,0.10907 -1.10742,0.31445h-0.00195l-15.35352,9.53125c-2.26805,1.40795 -4.87775,2.15039 -7.54687,2.15039c-2.66913,0 -5.27687,-0.74244 -7.54492,-2.15039l-15.35352,-9.53125c-0.33323,-0.20683 -0.71706,-0.31445 -1.10742,-0.31445zM25.99219,19.00195c0.01963,0 0.03796,0.0065 0.05273,0.01563l15.35352,9.5293c2.58394,1.60405 5.55874,2.45117 8.59961,2.45117c3.04087,0 6.01762,-0.84712 8.60156,-2.45117l15.35352,-9.5293c0.02037,-0.01262 0.03505,-0.01562 0.05469,-0.01562c0.02099,0 0.03485,0.0031 0.04883,0.01172l0.00195,0.00195l16.42773,10.10938c0.03581,0.02202 0.06484,0.05362 0.09766,0.08008l-40.58398,22.22461l-40.58398,-22.22461c0.03286,-0.02651 0.06184,-0.05806 0.09766,-0.08008l16.42773,-10.10937c0.01252,-0.0077 0.03169,-0.01367 0.05078,-0.01367zM74.01367,22.94922c-0.45595,0.00093 -0.91064,0.12602 -1.3125,0.375l-5.46484,3.39258c-0.15501,0.0927 -0.24799,0.2618 -0.24322,0.44235c0.00477,0.18056 0.10653,0.34451 0.26622,0.42891c0.15969,0.0844 0.35248,0.07612 0.50435,-0.02165l5.46289,-3.39062c0.48429,-0.30005 1.09368,-0.30209 1.57813,-0.00391l9.34961,5.75391c0.15212,0.09388 0.34276,0.09946 0.50012,0.01465c0.15735,-0.08481 0.2575,-0.24713 0.26271,-0.42581c0.00521,-0.17868 -0.0853,-0.34656 -0.23744,-0.4404l-9.35156,-5.75391c-0.40278,-0.24791 -0.85851,-0.37202 -1.31445,-0.37109zM65.31836,27.99609c-0.09546,-0.00022 -0.18899,0.02689 -0.26953,0.07813l-1.61133,1c-0.23515,0.14562 -0.30773,0.4543 -0.16211,0.68945c0.14562,0.23515 0.4543,0.30773 0.68945,0.16211l1.61133,-1c0.19369,-0.11534 0.28626,-0.34603 0.22602,-0.56327c-0.06024,-0.21724 -0.25839,-0.3673 -0.48383,-0.36642zM9,30.11914l40.5,22.17773v32.56445c-0.00864,-0.00502 -0.01883,-0.00643 -0.02734,-0.01172l-39.96289,-24.80469c-0.32792,-0.20368 -0.50977,-0.52995 -0.50977,-0.91602zM90.99805,30.11914v29.00977c0,0.38606 -0.17989,0.71233 -0.50781,0.91602l-39.96289,24.80469c-0.00852,0.00529 -0.0187,0.0067 -0.02734,0.01172v-32.56445zM12.49219,34.99219c-0.13261,0.00207 -0.25896,0.05673 -0.35127,0.15197c-0.0923,0.09523 -0.14299,0.22324 -0.14092,0.35584v21.16992c0,0.86397 0.44748,1.66732 1.18164,2.12305l16.05469,9.96484c0.15187,0.09777 0.34466,0.10605 0.50435,0.02165c0.15969,-0.0844 0.26145,-0.24835 0.26622,-0.42891c0.00477,-0.18056 -0.08821,-0.34965 -0.24322,-0.44235l-16.05469,-9.96484c-0.44184,-0.27427 -0.70898,-0.7534 -0.70898,-1.27344v-21.16992c0.00212,-0.13532 -0.0507,-0.26572 -0.1464,-0.36141c-0.0957,-0.0957 -0.22609,-0.14852 -0.36141,-0.1464zM36.47852,72.17383c-0.22258,0.00595 -0.4144,0.15835 -0.47053,0.37381c-0.05613,0.21546 0.03696,0.44209 0.22835,0.55587l4,2.48242c0.15187,0.09776 0.34465,0.10603 0.50433,0.02164c0.15968,-0.0844 0.26144,-0.24834 0.26621,-0.4289c0.00477,-0.18055 -0.0882,-0.34964 -0.2432,-0.44235l-4,-2.48242c-0.08478,-0.05488 -0.1842,-0.08279 -0.28516,-0.08008zM43.47852,76.51953c-0.22129,0.00729 -0.41144,0.15924 -0.46737,0.37347c-0.05593,0.21423 0.03569,0.43974 0.22518,0.55426l1,0.62109c0.15187,0.09777 0.34466,0.10605 0.50435,0.02165c0.15969,-0.0844 0.26145,-0.24835 0.26622,-0.42891c0.00477,-0.18056 -0.08821,-0.34965 -0.24322,-0.44235l-1,-0.62109c-0.085,-0.05419 -0.1844,-0.08142 -0.28516,-0.07812z"></path>
                      </g>
                    </g>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          <div className="social">
            <h2>Social</h2>
            <ul>
              <li>
                <Link>
                  <FacebookFilled />
                </Link>
              </li>
              <li>
                <Link>
                  <InstagramFilled />
                </Link>
              </li>
              <li>
                <Link>
                  <YoutubeFilled />
                </Link>
              </li>
              <li>
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    class="iconify iconify--ic"
                    width="25"
                    height="25"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"
                    ></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="item">
          <h2>Liên Hệ</h2>
          <ul>
            <li>
              <Link>
                <MailOutlined />
                info@ssstutter.com
              </Link>
            </li>
            <li>
              <Link>
                <PhoneOutlined />
                0869936266
                <FacebookFilled />
              </Link>
            </li>
          </ul>
        </div>
      </Top>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 40px 80px;
  background-color: #000;
  color: #fff;

  .ecommerce,
  .social {
    h2 {
      font-weight: 300;
    }
    ul {
      display: flex;
      align-items: center;
      svg {
        width: 20px;
      }
    }
  }
`;
const Top = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  h2 {
    font-size: 20px;
    text-transform: uppercase;
  }
  h3 {
    font-size: 16px;
    padding: 16px 0;
    line-height: 1.5;
    font-weight: normal;
    width: 70%;
    text-align: justify;
  }
  a {
    color: #fff;
    font-size: 16px;
    padding: 4px 0;
    line-height: 1.5;
    font-weight: normal;
    width: 70%;
    text-align: justify;
  }
  ul {
    padding: 0;
    li {
      a {
        display: flex;
        align-items: center;
        svg {
          margin-right: 5px;
        }
      }
    }
  }
`;

export default Footer;
