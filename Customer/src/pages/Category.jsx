import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DownOutlined, PicCenterOutlined } from "@ant-design/icons";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import Button from "../components/Button";
import { getList } from "../services/product";

const Category = () => {
  const [openCategory, setOpenCategory] = useState(false);
  const [openRefineBy, setOpenRefineBy] = useState(false);

  const handleClickOpenCategory = () => {
    setOpenCategory((pre) => !pre);
  };

  const handleClickOpenRefineBy = () => {
    setOpenRefineBy((pre) => !pre);
  };

  const scroll = window.scrollY;
  const handleScroll = () => {
    setOpenCategory(false);
    setOpenRefineBy(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scroll > 0) {
        handleScroll();
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await getList().then((res) => setData(res.data));
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Title>
        <h1>For him</h1>
      </Title>
      <Option>
        <TopOption>
          <div className="item" onClick={handleClickOpenCategory}>
            <h2>Danh Mục</h2>
            <DownOutlined />
          </div>
          <div className="item" onClick={handleClickOpenRefineBy}>
            <h4>Refine By</h4>
            <PicCenterOutlined />
          </div>
        </TopOption>
        <ContentOption>
          <Categories className={openCategory && "active"}>
            <Row>
              <Col sm="3">
                <h3>Sơ mi & áo kiểu</h3>
              </Col>
              <Col sm="3">
                <h3>Áo thun</h3>
              </Col>
              <Col sm="3">
                <h3>Quần</h3>
              </Col>
              <Col sm="3">
                <h3>Len dệt</h3>
              </Col>
              <Col sm="3">
                <h3>Phụ kiện</h3>
              </Col>
              <Col sm="3">
                <h3>Áo Blazer & áo khoác</h3>
              </Col>
              <Col sm="3">
                <h3>Quần bò</h3>
              </Col>
              <Col sm="3">
                <h3>Quần short</h3>
              </Col>
              <Col sm="3">
                <h3>Giày</h3>
              </Col>
              <Col sm="3">
                <h3>Túi & ví</h3>
              </Col>
              <Col sm="3">
                <h3>Hoodie & Sweatershirt</h3>
              </Col>
            </Row>
          </Categories>
          <RefineBy className={openRefineBy && "active"}>
            <Row className="refine-by">
              <Col sm="4">
                <h2>Color</h2>
                <ul>
                  <li>
                    <div className="item">
                      <p style={{ backgroundColor: "rgb(255, 255, 0)" }}></p>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <p style={{ backgroundColor: "rgb(255, 255, 0)" }}></p>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <p style={{ backgroundColor: "rgb(255, 255, 0)" }}></p>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <p style={{ backgroundColor: "rgb(255, 255, 0)" }}></p>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <p style={{ backgroundColor: "rgb(255, 255, 0)" }}></p>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <p style={{ backgroundColor: "rgb(255, 255, 0)" }}></p>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <p style={{ backgroundColor: "rgb(255, 255, 0)" }}></p>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <p style={{ backgroundColor: "rgb(255, 255, 0)" }}></p>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <p style={{ backgroundColor: "rgb(255, 255, 0)" }}></p>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <p style={{ backgroundColor: "rgb(255, 255, 0)" }}></p>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <p style={{ backgroundColor: "rgb(255, 255, 0)" }}></p>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <p style={{ backgroundColor: "rgb(255, 255, 0)" }}></p>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <p style={{ backgroundColor: "rgb(255, 255, 0)" }}></p>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <p style={{ backgroundColor: "rgb(255, 255, 0)" }}></p>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <p style={{ backgroundColor: "rgb(255, 255, 0)" }}></p>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <p style={{ backgroundColor: "rgb(255, 255, 0)" }}></p>
                    </div>
                  </li>
                </ul>
              </Col>
              <Col sm="4">
                <h2>Size Áo</h2>
                <ul className="size">
                  <li>
                    <div className="item">
                      <input type="checkbox" name="size[]" id="" />
                      <label htmlFor="">1</label>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <input type="checkbox" name="size[]" id="" />
                      <label htmlFor="">2</label>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <input type="checkbox" name="size[]" id="" />
                      <label htmlFor="">3</label>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <input type="checkbox" name="size[]" id="" />
                      <label htmlFor="">4</label>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <input type="checkbox" name="size[]" id="" />
                      <label htmlFor="">5</label>
                    </div>
                  </li>
                </ul>
                <h2>Size Quần</h2>
                <ul className="size">
                  <li>
                    <div className="item">
                      <input type="checkbox" name="size[]" id="" />
                      <label htmlFor="">29</label>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <input type="checkbox" name="size[]" id="" />
                      <label htmlFor="">30</label>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <input type="checkbox" name="size[]" id="" />
                      <label htmlFor="">31</label>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <input type="checkbox" name="size[]" id="" />
                      <label htmlFor="">32</label>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <input type="checkbox" name="size[]" id="" />
                      <label htmlFor="">33</label>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <input type="checkbox" name="size[]" id="" />
                      <label htmlFor="">34</label>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <input type="checkbox" name="size[]" id="" />
                      <label htmlFor="">35</label>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <input type="checkbox" name="size[]" id="" />
                      <label htmlFor="">36</label>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <input type="checkbox" name="size[]" id="" />
                      <label htmlFor="">37</label>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <input type="checkbox" name="size[]" id="" />
                      <label htmlFor="">38</label>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <input type="checkbox" name="size[]" id="" />
                      <label htmlFor="">39</label>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <input type="checkbox" name="size[]" id="" />
                      <label htmlFor="">40</label>
                    </div>
                  </li>
                </ul>
              </Col>
              <Col sm="4">
                <h2>Sắp Xếp</h2>
                <ul className="orderby">
                  <li>
                    <div className="item">
                      <input type="radio" name="orderby" id="" />
                      <label htmlFor="up">Giá cao nhất</label>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <input type="radio" name="orderby" id="" />
                      <label htmlFor="up">Giá thấp nhất</label>
                    </div>
                  </li>
                </ul>
              </Col>
            </Row>
            <BottomOption>
              <div>
                <Button black>Áp dụng</Button>
                <Button black>Đặt lại</Button>
              </div>
            </BottomOption>
          </RefineBy>
        </ContentOption>
      </Option>
      <Content>
        <Row>
          <Col sm="3">
            <Product />
          </Col>
          <Col sm="3">
            <Product />
          </Col>
          <Col sm="3">
            <Product />
          </Col>
          <Col sm="3">
            <Product />
          </Col>
          <Col sm="3">
            <Product />
          </Col>
          <Col sm="3">
            <Product />
          </Col>
          <Col sm="3">
            <Product />
          </Col>
          <Col sm="3">
            <Product />
          </Col>
          <Col sm="3">
            <Product />
          </Col>
          <Col sm="3">
            <Product />
          </Col>
          <Col sm="3">
            <Product />
          </Col>
          <Col sm="3">
            <Product />
          </Col>
          <Col sm="3">
            <Product />
          </Col>
          <Col sm="3">
            <Product />
          </Col>
          <Col sm="3">
            <Product />
          </Col>
          <Col sm="3">
            <Product />
          </Col>
        </Row>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 16px 0;
`;
const Title = styled.div`
  h1 {
    text-transform: uppercase;
    padding: 0 80px;
    font-size: 20px;
    font-weight: 600;
  }
`;
const Option = styled.div`
  h2 {
    font-size: 17px;
    font-weight: 400;
    margin-bottom: 0;
  }
  h4 {
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 0;
  }
`;
const TopOption = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 80px;
  .item {
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      margin-left: 10px;
      width: 20px;
      height: 20px;
    }
  }
`;
const ContentOption = styled.div`
  h3 {
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 1.5;
    letter-spacing: 0.5px;
  }
`;

const Categories = styled.div`
  height: 0;
  padding: 0 80px;
  background-color: #fff;
  overflow: hidden;
  transition: all 0.4s;
  h3 {
    padding: 8px 32px;
    margin-bottom: 0;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  &.active {
    height: 20vh;
    padding: 8px 80px;
  }
`;
const RefineBy = styled.div`
  max-height: 0;
  overflow-y: hidden;
  background-color: #fff;
  transition: all 0.4s;
  .refine-by {
    max-height: 40vh;
    overflow-y: auto;
  }
  &.active {
    max-height: 70vh;
  }
  h2 {
    padding: 8px 0;
  }
  padding: 0 80px;
  ul {
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));
    width: 66.666667%;
    gap: 0.5rem;

    &.size {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    &.orderby {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      label {
        font-size: 17px !important;
      }
    }

    li {
      display: block;
      .item {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        gap: 1rem;
        p {
          width: 24px;
          height: 24px;
          border: 1px solid #e5e7eb;
          margin: 0;
          padding: 0;
        }
        label {
          font-size: 14px;
        }
        input {
          width: 14px;
          height: 14px;
        }
      }
    }
  }
`;
const BottomOption = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 16px;
  border-top: 1px solid #e5e7eb;
  > div {
    display: flex;
    button {
      width: auto;
      margin-top: 20px;
    }
  }
`;

const Content = styled.div``;

export default Category;
