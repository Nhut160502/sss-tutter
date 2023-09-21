import React, { useState } from "react";
import { styled } from "styled-components";
import Banner from "../components/Banner";
import { PlusOutlined } from "@ant-design/icons";
import Button from "../components/Button";
import RecruitmentForm from "../components/RecruitmentForm";
import { useDispatch } from "react-redux";
import {
  hiddeRecruitment,
  visibleRecruitment,
} from "../providers/recruitmentSlice";
import { hideOverlay, visibleOverlay } from "../providers/overlaySlice";
import Overlay from "../components/Overlay";

const Recruitment = () => {
  const dispatch = useDispatch();
  const [contentId, setContentId] = useState([]);
  const [nameRecruitment, setNameRecruitment] = useState("");
  const handleClick = (name, id) => {
    if (!contentId.includes(id)) {
      setContentId((pre) => [...pre, id]);
      setNameRecruitment(name);
    } else {
      setContentId(contentId.filter((item) => item !== id));
    }
  };
  const handleClickRecruitment = () => {
    dispatch(visibleRecruitment());
    dispatch(visibleOverlay());
  };
  const handleCloseRecruitment = () => {
    dispatch(hideOverlay());
    dispatch(hiddeRecruitment());
  };
  return (
    <>
      <Overlay onClick={handleCloseRecruitment} />
      <Wrapper>
        <Banner src="https://dashboard.leanow.vn/upload/2-2023/1676694506175.webp" />
        <Desc>
          <p>
            “Bắt đầu từ năm 2015, SSStutter đã được nhắc đến như là một trong
            những thương hiệu thời trang chuyên nghiệp nhất tại Việt Nam với
            tiêu chí “Đem Đến Sự Tinh Gọn Và Tối Giản Trong Từng Sản Phẩm”. Ngay
            từ những bước đi đầu tiên, SSStutter đã chọn hướng đi riêng cho mình
            bằng những sản phẩm được đầu tư và thiết kế kĩ càng với mong muốn
            mang đến cho các bạn trẻ yêu thời trang một cái nhìn mới, cảm giác
            mới và hơn cả là thông điệp: Refined Life - Cuộc Sống Tinh Gọn.
          </p>
          <p>
            Tại sao lại là "Refined Life - Cuộc Sống Tinh Gọn"? - bởi SSStutter
            mong muốn cùng bạn nâng cấp chất lượng cuộc sống thông qua việc chia
            sẻ một lối sống Tinh Gọn, bắt đầu từ những bộ trang phục tinh tế,
            mỗi ngày.”
          </p>
        </Desc>
        <Message>
          <Banner src={"https://ssstutter.com/img/store.jpg"} />
          <div className="content">
            <h1>8 Giá trị cốt lõi của SSSTUTTER</h1>
            <div className="list">
              <ul>
                <li>
                  1. Sáng Tạo: LUÔN LUÔN THỬ NGHIỆM, SÁNG TẠO VÀ CHẤP NHẬN THẤT
                  BẠI.
                </li>
                <li>
                  2. Học Tập: Tất cả nhân viên luôn luôn đặt tinh thần Học Tập
                  Mỗi Ngày lên đầu.
                </li>
                <li>
                  3. Thật Thà, Trung Thực: Sự tử tế là cốt lõi để có thể phát
                  triển vượt bậc - SSStutter không chấp nhận bất kì hành vi gian
                  dối, phục vụ mục đích cá nhân.
                </li>
                <li>
                  4. Vui Vẻ, Lạc Quan: Luôn có một chút hài hước và tích cực khi
                  nói chuyện & luôn có cách để giải quyết vấn đề, dù có khó khăn
                  đến đâu.
                </li>
              </ul>
              <ul>
                <li>
                  5. Chiều Chuộng, Phục Vụ: Tập trung chia sẻ giá trị, chăm sóc
                  khách hàng như một người bạn thân.
                </li>
                <li>
                  6. Lắng Nghe (Lắng Nghe và Phản Hồi): Mọi feedback (cả khen,
                  chê, góp ý) đều được chào đón.
                </li>
                <li>
                  7. Hành Động Nhanh: Chủ Động tìm giải pháp trước khi hỏi
                  Leader chứ không thụ động; Chủ Động Tận Dụng Kinh Nghiệm từ
                  người khác để tìm ra câu Trả Lời cho mình; Chủ Động liên lạc
                  với Lãnh Đạo nếu thấy có vấn đề nhức nhối.
                </li>
                <li>
                  8. Kỉ Luật: Quản trị bản thân trước khi quản trị đội nhóm -
                  đừng ba hoa quá nhiều và mơ mộng cao sao nếu bản thân còn
                  thiếu 2 chữ: KỶ LUẬT.
                </li>
              </ul>
            </div>
          </div>
        </Message>
        <Content>
          <h1>Tuyển dụng</h1>
          <div>
            <ul>
              <li className={contentId.includes(1) && "active"}>
                <div
                  className="title"
                  onClick={(e) => handleClick("marketing manager", 1)}
                >
                  <h2>MARKETING MANAGER</h2>
                  <PlusOutlined />
                </div>
                <div className="content">
                  <div>
                    <h3>Mô tả công việc</h3>
                    <ul class="px-4">
                      <li>
                        Phụ trách quản lý hiệu suất kinh doanh của các kênh
                        online, bao gồm: fanpage, sàn, website, CSKH và các kênh
                        khác khác trừ offline HN và offline SG
                      </li>
                      <li> Phụ trách quản lý nhân sự của các kênh trên </li>
                      <li>
                        Phối hợp với Sale offline HN và SG và kho để triển khai
                        các hoạt động kinh doanh tổng thể theo mục tiêu đề ra
                        của công ty
                      </li>
                      <li>
                        Được thay đổi, tối ưu và đề xuất các mục tiêu kinh doanh
                        của công ty
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3>Yêu cầu công việc</h3>
                    <ul class="px-4">
                      <li>Có kinh nghiệm làm về bán lẻ thời trang </li>
                      <li>
                        {" "}
                        Có kinh nghiệm quản lý team hoặc 03 nhân sự trở lên{" "}
                      </li>
                      <li> Quản lý team marketing về mặt nhân sự </li>
                      <li>
                        Điều phối nguồn lực truyền thông giữa các kênh
                        offline-sàn-web
                      </li>
                      <li> Có mindset kinh doanh và số liệu</li>
                    </ul>
                  </div>
                  <div>
                    <h3>Quyền lợi</h3>
                    <ul class="px-4">
                      <li>Mức lương cạnh tranh, tương xứng với năng lực </li>
                      <li>
                        Có cơ hội phát triển năng lực bản thân tốt nhất theo
                        phong cách bản thân
                      </li>
                      <li>
                        Lương tháng thứ 13, các phụ cấp, thưởng Lễ, Tết theo quy
                        định nhà nước và công ty
                      </li>
                      <li>
                        Được thường xuyên tham gia đánh giá năng lực, xem xét
                        tăng lương
                      </li>
                      <li>Đóng BHXH, BHYT, BHTN theo quy định Nhà nước </li>
                      <li>
                        Môi trường làm việc trẻ trung, sáng tạo, có cơ hội phát
                        triển và khả năng thăng tiến.
                      </li>
                    </ul>
                  </div>
                  <Button black onClick={handleClickRecruitment}>
                    ứng tuyển
                  </Button>
                </div>
              </li>
              <li className={contentId.includes(2) && "active"}>
                <div
                  className="title"
                  onClick={(e) => handleClick("Nhân viên bán hàng", 2)}
                >
                  <h2>NHÂN VIÊN BÁN HÀNG</h2>
                  <PlusOutlined />
                </div>
                <div className="content">
                  <div>
                    <h3>Mô tả công việc</h3>
                    <ul class="px-4">
                      <li>
                        Bán sản phẩm tại cửa hàng, tư vấn và giải đáp thắc mắc
                        cho khách hàng;
                      </li>
                      <li>
                        Quản lý, bảo quản và vệ sinh hàng hóa, cửa hàng, theo
                        dõi xuất nhập mỗi ngày;
                      </li>
                      <li>Sắp xếp và giữ gìn kho hàng gọn gàng, sạch sẽ;</li>
                      <li>Làm việc theo sự phân công của Cửa hàng trưởng</li>
                    </ul>
                  </div>
                  <div>
                    <h3>Yêu cầu công việc</h3>
                    <ul class="px-4">
                      <li>Các bạn trẻ độ tuổi: 18 – 25 tuổi;</li>
                      <li>
                        Ưu tiên các bạn có thể làm full-time và gắn bó lâu dài;
                      </li>
                      <li>
                        Trung thực, chịu học hỏi và nắm bắt nhanh công việc;
                      </li>
                      <li>Giao tiếp tốt, tự tin, hòa đồng.</li>
                      <li>Đối với khu vực HN: Ưu tiên nữ </li>
                    </ul>
                  </div>
                  <div>
                    <h3>Quyền lợi</h3>
                    <ul class="px-4">
                      <li>20.000 đ/h đối với nhân viên part-time</li>
                      <li>5.000.000 đ / tháng đối với nhân viên Full time</li>
                      <li>
                        Lương tháng thứ 13, các phụ cấp, thưởng Lễ, Tết theo quy
                        định Nhà nước và công ty ( đối với nhân viên fulltime )
                      </li>
                      <li>
                        Được tham gia đánh giá năng lực, xem xét tăng lương 06
                        tháng/ lần đối với nhân viên Full–time;
                      </li>
                      <li>
                        Nhân viên Full-time làm trên 06 tháng sẽ được đóng BHXH,
                        BHYT, BHTN theo quy định Nhà nước;
                      </li>
                      <li>
                        Môi trường làm việc trẻ trung, sáng tạo, có cơ hội phát
                        triển và khả năng thăng tiến.
                      </li>
                    </ul>
                  </div>
                  <Button black onClick={handleClickRecruitment}>
                    ứng tuyển
                  </Button>
                </div>
              </li>
              <li className={contentId.includes(3) && "active"}>
                <div
                  className="title"
                  onClick={(e) => handleClick("hành chính nhân sự", 3)}
                >
                  <h2>HÀNH CHÍNH NHÂN SỰ</h2>
                  <PlusOutlined />
                </div>
                <div className="content">
                  <div>
                    <h3>Mô tả công việc</h3>
                    <ul class="px-4">
                      <li>
                        Thực hiện các công tác tuyển dụng, sàng lọc, phỏng vấn
                        ứng viên.
                      </li>
                      <li>
                        Thực hiện các công việc liên quan đến triển khai nghiệp
                        vụ C&amp;B cho CBNV toàn công ty
                      </li>
                      <li>
                        Tham gia xây dựng, lên kế hoạch cho các hoạt động nội bộ
                        của công ty.
                      </li>
                      <li>
                        Quản lý và cấp phát tài sản, công cụ lao động cho cán bộ
                        nhân viên.
                      </li>
                      <li>
                        Quản lý tài sản, nhận đề xuất bổ sung văn phòng phẩm,
                        máy móc từ các phòng ban.
                      </li>
                      <li>
                        Thực hiện các công việc khác theo sự phân công của cấp
                        trên.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3>Yêu cầu công việc</h3>
                    <ul class="px-4">
                      <li>Độ tuổi : 24 - 30 </li>
                      <li>
                        Ưu tiên ứng viên tốt nghiệp các trường ĐH ngành quản trị
                        nhân lực, ngân hàng, luật,…
                      </li>
                      <li>
                        Có kinh nghiệm ở vị trí tương đương từ 02 năm tại các
                        đơn vị startup là một lợi thế.
                      </li>
                      <li>
                        Có kinh nghiệm về tuyển dụng và thị trường lao động{" "}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3>Quyền lợi</h3>
                    <ul class="px-4">
                      <li>Lương cứng: (10.000.000đ – 12.000.000d);</li>
                      <li>Được xem xét đánh giá, tăng lương định kỳ;</li>
                      <li>Được đào tạo, nâng cao nghiệp vụ thường xuyên;</li>
                      <li>
                        Môi trường làm việc trẻ trung, công bằng, minh bạch;
                      </li>
                      <li>
                        Các phụ cấp, thưởng Lễ, Tết theo quy định nhà nước và
                        công ty.
                      </li>
                    </ul>
                  </div>
                  <Button black onClick={handleClickRecruitment}>
                    ứng tuyển
                  </Button>
                </div>
              </li>
              <li className={contentId.includes(4) && "active"}>
                <div
                  className="title"
                  onClick={(e) => handleClick("Nhân viên kho", 4)}
                >
                  <h2>NHÂN VIÊN KHO</h2>
                  <PlusOutlined />
                </div>
                <div className="content">
                  <div>
                    <h3>Mô tả công việc</h3>
                    <ul class="px-4">
                      <li>
                        Quản lý, phân loại, đóng gói và sắp xếp hàng hóa trong
                        kho theo quy định;
                      </li>
                      <li>
                        Kiểm tra chất lượng hàng hóa được chuyển về phân loại
                        những hàng hóa lỗi hỏng, báo cáo với thủ kho;
                      </li>
                      <li>
                        Soạn đơn hàng, đóng gói và gửi đi khi có đơn hàng cho
                        hãng vận chuyển, và khách trong nội thành
                      </li>
                      <li>
                        Hỗ trợ các công việc phát sinh khi được Thủ kho yêu cầu.
                      </li>
                      <li>
                        Thu tiền của khách hàng và bàn giao lại vào cuối ngày
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3>Yêu cầu công việc</h3>
                    <ul class="px-4">
                      <li>Các bạn có sức khỏe tốt, muốn gắn bó lâu dài;</li>
                      <li>Sắp xếp công việc khoa học; </li>
                      <li>
                        Chăm chỉ, cẩn thận, chủ động trong công việc, sức khỏe
                        tốt.
                      </li>
                      <li>Hòa đồng, thân thiện, có kỹ năng làm việc nhóm</li>
                      <li>Có kỹ năng sử dụng phần mềm, tin học văn phòng</li>
                    </ul>
                  </div>
                  <div>
                    <h3>Quyền lợi</h3>
                    <ul class="px-4">
                      <li>Mức lương : 5.000.000 đ - 7.000.000 đ </li>
                      <li>Thưởng thành tích </li>
                      <li>Có lộ trình thăng tiến rõ ràng;</li>
                      <li>
                        Lương tháng thứ 13, các phụ cấp, thưởng Lễ, Tết theo quy
                        định Nhà nước và công ty;
                      </li>
                      <li>
                        Được tham gia đánh giá năng lực, xem xét tăng lương định
                        kỳ đối với nhân viên Full – time;
                      </li>
                      <li>
                        Nhân viên Full – time trên 06 tháng sẽ được đóng BHYT,
                        BHXH theo quy định của Nhà Nước;
                      </li>
                      <li>
                        Môi trường làm việc trẻ trung, sáng tạo và có cơ hội
                        thăng tiến.
                      </li>
                    </ul>
                  </div>
                  <Button black onClick={handleClickRecruitment}>
                    ứng tuyển
                  </Button>
                </div>
              </li>
              <li className={contentId.includes(5) && "active"}>
                <div
                  className="title"
                  onClick={(e) => handleClick("marketing executive", 5)}
                >
                  <h2>MARKETING EXECUTIVE</h2>
                  <PlusOutlined />
                </div>
                <div className="content">
                  <div>
                    <h3>Mô tả công việc</h3>
                    <ul class="px-4">
                      <li>
                        Đảm bảo doanh thu và đáp ứng các mục tiêu bán hàng ngắn
                        hạn, dài hạn thông qua việc quản lý và vận hành các gian
                        hàng online trên nền tảng Thương Mại Điện Tử E-Commerce;
                      </li>
                      <li>
                        Phân tích dữ liệu: phân tích các chỉ số bán hàng liên
                        quan và xu hướng tâm lý khách hàng để cải thiện và nắm
                        bắt cơ hội kinh doanh;
                      </li>
                      <li>
                        Vận dụng, tối đa hóa các công cụ hỗ trợ của sàn thương
                        mại điện tử, bán hàng đa kênh trên Shopee, Lazada, Tiki,
                        Facebook, Instagram và website công ty;
                      </li>
                      <li>
                        Phối hợp với team Digital Marketing để lên chiến lược
                        phát triển các kênh khác: TV, SMS, Email, Video, Mobile
                        Marketing,…
                      </li>
                      <li>
                        Đo lường và báo cáo hoạt động kinh doanh dựa trên các
                        thông số của hệ thống và hiệu suất bán hàng;
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3>Yêu cầu công việc</h3>
                    <ul class="px-4">
                      <li>
                        Tối thiểu 01 năm kinh nghiệm làm việc trong lĩnh vực
                        thương mại điện tử
                      </li>
                      <li>
                        Có hiểu biết về Marketing và có khả năng viết bài
                        content sản phẩm, SEO
                      </li>
                      <li>Có khả năng lọc và phân tích số liệu</li>
                      <li>
                        Có kĩ năng trình bày, lập kế hoạch và triển khai chiến
                        dịch;
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3>Quyền lợi</h3>
                    <ul class="px-4">
                      <li>Đối với part-time: (3.000.000 - 5.000.000)</li>
                      <li>
                        Lương tháng thứ 13, các phụ cấp, thưởng Lễ, Tết theo quy
                        định nhà nước và công ty;
                      </li>
                      <li>
                        Được thường xuyên tham gia đánh giá năng lực, xem xét
                        tăng lương
                      </li>
                      <li>Đóng BHXH, BHYT, BHTN, theo quy định Nhà nước</li>
                      <li>
                        Môi trường làm việc trẻ trung, sáng tạo, có cơ hội phát
                        triển và khả năng thăng tiến.
                      </li>
                    </ul>
                  </div>
                  <Button black onClick={handleClickRecruitment}>
                    ứng tuyển
                  </Button>
                </div>
              </li>
              <li className={contentId.includes(6) && "active"}>
                <div
                  className="title"
                  onClick={(e) => handleClick("Booking kol, Kocs", 6)}
                >
                  <h2>BOOKING KOLS, KOCS</h2>
                  <PlusOutlined />
                </div>
                <div className="content">
                  <div>
                    <h3>Mô tả công việc</h3>
                    <ul class="px-4">
                      <li>
                        Lên kế hoạch booking KOLs, KOCs theo tháng, theo
                        campaign trên các nền tảng xã hội TikTok, Instagram,
                        Fanpage.
                      </li>
                      <li>
                        Tìm kiếm, liên hệ, đàm phán với các KOLs, KOCs phù hợp
                        với thương hiệu.
                      </li>
                      <li>
                        Hỗ trợ và quản lý việc sản xuất nội dung của KOLs, KOCs:
                        cung cấp thông tin/hình ảnh, gửi sản phẩm, theo dõi quá
                        trình quay video/chụp ảnh &amp; nghiệm thu sản phẩm.
                      </li>
                      <li>
                        Đảm bảo tiến độ công việc và báo cáo định kỳ theo
                        tuần/tháng/quý và theo chiến dịch. Cùng team lên ý tưởng
                        &amp; triển khai các campaign, các hoạt động truyền
                        thông…; tham gia các buổi họp hàng tuần
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3>Yêu cầu công việc</h3>
                    <ul class="px-4">
                      <li>
                        Am hiểu &amp; bắt kịp các trends trên mạng xã hội
                        TikTok, Facebook, Instagram.
                      </li>
                      <li>
                        Có khả năng đàm phán, thỏa thuận và xây dựng nội dung
                        cùng KOLs, KOCs;
                      </li>
                      <li>
                        Có mối quan hệ tốt với Influencers/KOLs, KOCs/Group là
                        một lợi thế;
                      </li>
                      <li>
                        Khả năng phân tích &amp; lập kế hoạch, quản lý thời gian
                        và phân bổ ngân sách.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3>Quyền lợi</h3>
                    <ul class="px-4">
                      <li>
                        Mức lương dao động ~5.000.000 VNĐ, tùy theo năng lực;
                      </li>
                      <li>
                        Được tham gia đánh giá năng lực, xem xét tăng lương 06
                        tháng/lần;
                      </li>
                      <li>
                        Môi trường làm việc vui vẻ, trẻ trung và tự do sáng tạo;
                      </li>
                      <li>
                        Cơ hội phát triển năng lực theo đúng nguyện vọng &amp;
                        tài năng bản thân.
                      </li>
                    </ul>
                  </div>
                  <Button black onClick={handleClickRecruitment}>
                    ứng tuyển
                  </Button>
                </div>
              </li>
            </ul>

            <ul>
              <li className={contentId.includes(7) && "active"}>
                <div
                  className="title"
                  onClick={(e) => handleClick("Graphic design", 7)}
                >
                  <h2>GRAPHIC DESIGN</h2>
                  <PlusOutlined />
                </div>
                <div className="content">
                  <div>
                    <h3>Mô tả công việc</h3>
                    <ul class="px-4">
                      <li>
                        Thiết kế ấn phẩm Online, bài đăng trên các kênh social
                        &amp; các sản phẩm Offline phục vụ cho campaign (Poster,
                        Standee, Tent Card,...).
                      </li>
                      <li>
                        Cùng team xây dựng concept, định hướng hình ảnh cho kênh
                        Online và Offline, lên ý tưởng và triển khai các chiến
                        dịch, hoạt động truyền thông…; tham gia họp team hàng
                        tuần.
                      </li>
                      <li>
                        Thiết kế theo order từ team marketing và các phòng ban
                        khác trong công ty.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3>Yêu cầu công việc</h3>
                    <ul class="px-4">
                      <li>Thành thạo sử dụng Illustrator</li>
                      <li>
                        Sử dụng được các công cụ đi kèm như Photoshop,
                        Lightroom;
                      </li>
                      <li>Có kĩ năng làm việc nhóm</li>
                      <li>
                        Yêu thích nghệ thuật, thời trang, nắm bắt được xu hướng
                        giới trẻ
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3>Quyền lợi</h3>
                    <ul class="px-4">
                      <li>Mức lương dao động ~ 10.000.000 đ , tùy năng lực</li>
                      <li>
                        Được tham gia đánh giá năng lực, xem xét tăng lương 06
                        tháng/lần;
                      </li>
                      <li>Môi trường làm việc trẻ trung, sáng tạo</li>
                      <li>
                        Cơ hội phát triển năng lực theo đúng nguyện vọng và tài
                        năng bản thân
                      </li>
                      <li></li>
                    </ul>
                  </div>
                  <Button black onClick={handleClickRecruitment}>
                    ứng tuyển
                  </Button>
                </div>
              </li>
              <li className={contentId.includes(8) && "active"}>
                <div
                  className="title"
                  onClick={(e) => handleClick("e-commerce excutive", 8)}
                >
                  <h2>E-COMMERCE EXECUTIVE</h2>
                  <PlusOutlined />
                </div>
                <div className="content">
                  <div>
                    <h3>Mô tả công việc</h3>
                    <ul class="px-4">
                      <li>
                        Trả lời, hỗ trợ, xử lí đơn hàng qua inbox, đánh giá và
                        comment
                      </li>
                      <li>Gọi điện xác nhận đơn hàng, chăm sóc khách hàng </li>
                      <li>Trực tiếp xử lí về khiếu nại của khách hàng </li>
                      <li>Lưu trữ thông tin khách hàng; </li>
                      <li>Làm việc theo sự phân công của Leader.</li>
                      <li>
                        Xử lí và theo dõi hành trình đơn hàng đổi/ trả/ thành
                        công
                      </li>
                      <li>Báo cáo phản hồi khách hàng về dịch vụ, sản phẩm </li>
                    </ul>
                  </div>
                  <div>
                    <h3>Yêu cầu công việc</h3>
                    <ul class="px-4">
                      <li>Nữ, độ tuổi: 18 – 25 tuổi;</li>
                      <li>
                        Trung thực, chịu học hỏi và nắm bắt nhanh công việc;
                      </li>
                      <li>Giao tiếp tốt, tự tin, hòa đồng.</li>
                      <li></li>
                    </ul>
                  </div>
                  <div>
                    <h3>Quyền lợi</h3>
                    <ul class="px-4">
                      <li>
                        Mức lương cạnh tranh, tương xứng với năng lực (5.000.000
                        –7.000.000) đối với fulltime
                      </li>
                      <li>Đối với Part time : 25.000/h</li>
                      <li>
                        Lương tháng thứ 13, các phụ cấp, thưởng Lễ, Tết theo quy
                        định Nhà nước và công ty;
                      </li>
                      <li>
                        Được tham gia đánh giá năng lực, xem xét tăng lương 06
                        tháng/ lần đối với nhân viên Full – time;
                      </li>
                      <li>
                        Nhân viên Full-time làm trên 06 tháng sẽ được đóng BHXH,
                        BHYT, BHTN theo quy định Nhà nước;
                      </li>
                      <li>
                        Môi trường làm việc trẻ trung, sáng tạo, có cơ hội phát
                        triển và khả năng thăng tiến.
                      </li>
                    </ul>
                  </div>
                  <Button black onClick={handleClickRecruitment}>
                    ứng tuyển
                  </Button>
                </div>
              </li>
              <li className={contentId.includes(9) && "active"}>
                <div
                  className="title"
                  onClick={(e) => handleClick("Tiktok content creator", 9)}
                >
                  <h2>TIKTOK CONTENT CREATOR</h2>
                  <PlusOutlined />
                </div>
                <div className="content">
                  <div>
                    <h3>Mô tả công việc</h3>
                    <ul class="px-4">
                      <li>
                        Sáng tạo nội dung, đề xuất chiến lược và kế hoạch xây
                        dựng kênh TikTok và tuyến video content trên các nền
                        tảng MXH (Fanpage, Instagram).
                      </li>
                      <li>
                        Lên ý tưởng, concept, viết voice, kịch bản quay - dựng,
                        brief hình ảnh,... cho các video.
                      </li>
                      <li>
                        Quay &amp; dựng video, phối hợp với bộ phận Stylist,
                        Design, Social trong quá trình sản xuất nội dung.
                      </li>
                      <li>
                        Tìm hiểu thị trường, khách hàng, sản phẩm; thường xuyên
                        cập nhật các trends MXH, xu hướng thời trang của giới
                        trẻ.
                      </li>
                      <li>
                        Phân tích &amp; báo cáo các số liệu của kênh theo
                        tuần/tháng/quý để tối ưu nội dung.
                      </li>
                      <li>
                        Cùng team lên ý tưởng &amp; triển khai các campaign, các
                        hoạt động truyền thông khác,...; tham gia các buổi họp
                        hàng tuần.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3>Yêu cầu công việc</h3>
                    <ul class="px-4">
                      <li>Có kinh nghiệm về content tối thiểu 06 tháng.</li>
                      <li>
                        Biết sử dụng phần mềm quay dựng video cơ bản (CapCut).
                      </li>
                      <li>
                        Có kỹ năng viết bài, định hướng, sáng tạo và biết nắm
                        bắt xu hướng content.
                      </li>
                      <li>
                        Có khả năng làm việc độc lập &amp; làm việc nhóm, sáng
                        tạo, có trách nhiệm với công việc.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3>Quyền lợi</h3>
                    <ul class="px-4">
                      <li>
                        Mức lương dao động ~5.000.000 VNĐ, tùy theo năng lực;
                      </li>
                      <li>
                        Được tham gia đánh giá năng lực, xem xét tăng lương 06
                        tháng/lần;
                      </li>
                      <li>
                        Môi trường làm việc vui vẻ, trẻ trung và tự do sáng tạo;
                      </li>
                      <li>
                        Cơ hội phát triển năng lực theo đúng nguyện vọng &amp;
                        tài năng bản thân
                      </li>
                    </ul>
                  </div>
                  <Button black onClick={handleClickRecruitment}>
                    ứng tuyển
                  </Button>
                </div>
              </li>
              <li className={contentId.includes(10) && "active"}>
                <div
                  className="title"
                  onClick={(e) => handleClick("Content creator", 10)}
                >
                  <h2>CONTENT CREATOR</h2>
                  <PlusOutlined />
                </div>
                <div className="content">
                  <div>
                    <h3>Mô tả công việc</h3>
                    <ul class="px-4">
                      <li>
                        Tìm hiểu về thị trường, ngành hàng, khách hàng và thương
                        hiệu.
                      </li>
                      <li>
                        Nắm rõ về nhu cầu, hành trình mua sắm &amp; yếu tố đưa
                        ra quyết định của khách hàng.
                      </li>
                      <li>
                        Thường xuyên cập nhật tình hình kinh doanh, hàng hoá để
                        lên ý tưởng, kế hoạch content phù hợp.
                      </li>
                      <li>
                        Viết bài liên quan tới sản phẩm, campaign nhằm tăng tỷ
                        lệ chuyển đổi, lượng traffic và doanh số.
                      </li>
                      <li>
                        Phân tích &amp; báo cáo các số liệu của kênh theo
                        tuần/tháng/quý để tối ưu nội dung.
                      </li>
                      <li>
                        Cùng team lên ý tưởng &amp; triển khai các campaign, các
                        hoạt động truyền thông khác,...
                      </li>
                      <li>Tham gia các buổi họp hàng tuần.</li>
                    </ul>
                  </div>
                  <div>
                    <h3>Yêu cầu công việc</h3>
                    <ul class="px-4">
                      <li>Có kinh nghiệm về content tối thiểu 06 tháng.</li>
                      <li>
                        Có tư duy marketing, thường xuyên cập nhật kiến thức và
                        có mong muốn học hỏi, trau dồi chuyên môn.
                      </li>
                      <li>Yêu thích thời trang, bắt kịp xu hướng giới trẻ.</li>
                      <li>Có khả năng làm việc độc lập và làm việc nhóm.</li>
                      <li>Chăm chỉ, cẩn thận, chủ động trong công việc</li>
                    </ul>
                  </div>
                  <div>
                    <h3>Quyền lợi</h3>
                    <ul class="px-4">
                      <li>
                        Mức lương theo năng lực &amp; thời gian làm việc, dao
                        động ~5.000.000 VNĐ (Part-time) và ~10.000.000 VNĐ
                        (Full-time).
                      </li>
                      <li>
                        Được tham gia đánh giá năng lực, xem xét tăng lương 06
                        tháng/lần;
                      </li>
                      <li>
                        Môi trường làm việc vui vẻ, trẻ trung và tự do sáng tạo;
                      </li>
                      <li>
                        Cơ hội phát triển năng lực theo đúng nguyện vọng &amp;
                        tài năng bản thân.
                      </li>
                    </ul>
                  </div>
                  <Button black onClick={handleClickRecruitment}>
                    ứng tuyển
                  </Button>
                </div>
              </li>
              <li className={contentId.includes(11) && "active"}>
                <div
                  className="title"
                  onClick={(e) => handleClick("Tiktok visual", 11)}
                >
                  <h2>TIKTOK VISUAL</h2>
                  <PlusOutlined />
                </div>
                <div className="content">
                  <div>
                    <h3>Mô tả công việc</h3>
                    <ul class="px-4">
                      <li>
                        Gương mặt đại diện của SSStutter trên TikTok và các nền
                        tảng MXH khác (Fanpage, Instagram…)
                      </li>
                      <li>
                        Phối hợp với bộ phận Content thực hiện quay chụp video
                        theo kịch bản được đề ra.
                      </li>
                      <li>
                        Cùng team xây dựng &amp; triển khai các campaign, các
                        hoạt động truyền thông…; góp ý cho sản phẩm của thương
                        hiệu;
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3>Yêu cầu công việc</h3>
                    <ul class="px-4">
                      <li>
                        Nam từ 18 - 25 tuổi, cao trên 1m72, ngoại hình sáng và
                        phù hợp với phong cách thư sinh.
                      </li>
                      <li>
                        Diễn xuất tự nhiên trước ống kính - ưu tiên ứng viên đã
                        có kinh nghiệm làm mẫu hoặc các lĩnh vực có liên quan.
                      </li>
                      <li>
                        Có tính kỷ luật, trách nhiệm với công việc &amp; kỹ năng
                        làm việc nhóm.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3>Quyền lợi</h3>
                    <ul class="px-4">
                      <li>
                        Mức lương dao động ~5.000.000 VNĐ, tùy theo năng lực
                      </li>
                      <li>
                        Được tham gia đánh giá năng lực, xem xét tăng lương 06
                        tháng/lần
                      </li>
                      <li>
                        Môi trường làm việc vui vẻ, trẻ trung và tự do sáng tạo
                      </li>
                      <li>
                        Cơ hội phát triển năng lực theo đúng nguyện vọng &amp;
                        tài năng bản thân.
                      </li>
                    </ul>
                  </div>
                  <Button black onClick={handleClickRecruitment}>
                    ứng tuyển
                  </Button>
                </div>
              </li>
              <li className={contentId.includes(12) && "active"}>
                <div
                  className="title"
                  onClick={(e) =>
                    handleClick("Quản lí va phân phối hàng hóa", 12)
                  }
                >
                  <h2>QUẢN LÝ VÀ ĐIỀU PHỐI HÀNG HOÁ</h2>
                  <PlusOutlined />
                </div>
                <div className="content">
                  <div>
                    <h3>Mô tả công việc</h3>
                    <ul class="px-4">
                      <li>
                        Phối hợp với bộ phận Kho Vận / Sales lên kế hoạch luân
                        chuyển hàng hóa cho hệ thống
                      </li>
                      <li>
                        Theo dõi cập nhật tình hình số lượng, chất lượng đầu vào
                        của hàng hóa
                      </li>
                      <li>
                        Theo dõi và cập nhật thường xuyên tình trạng, chất lượng
                        hàng hóa tại kho và cửa hàng để đưa ra đề xuất thúc đẩy
                        bán hàng dưới hệ thống
                      </li>
                      <li>
                        Đảm bảo số tồn kho tương ứng với mục tiêu doanh số của
                        hệ thống
                      </li>
                      <li></li>
                    </ul>
                  </div>
                  <div>
                    <h3>Yêu cầu công việc</h3>
                    <ul class="px-4">
                      <li>Có kiến thức về sản phẩm</li>
                      <li>
                        Ít nhất 6 tháng - 1 năm kinh nghiệm tại vị trí tương
                        đương hoặc vị trí thuộc khối Sales
                      </li>
                      <li>
                        Có kỹ năng tin học văn phòng, làm việc nhóm, phân tích
                        số liệu
                      </li>
                      <li>Tự tin giao tiếp</li>
                      <li></li>
                    </ul>
                  </div>
                  <div>
                    <h3>Quyền lợi</h3>
                    <ul class="px-4">
                      <li>
                        Mức lương : 7.000.000 đ - 10.000.000 đ tùy năng lực
                      </li>
                      <li>Có lộ trình thăng tiến rõ ràng;</li>
                      <li>
                        Lương tháng thứ 13, các phụ cấp, thưởng Lễ, Tết theo quy
                        định Nhà nước và công ty;
                      </li>
                      <li>
                        Được tham gia đánh giá năng lực, xem xét tăng lương định
                        kỳ đối với nhân viên Full – time;
                      </li>
                      <li>
                        Nhân viên Full – time trên 06 tháng sẽ được đóng BHYT,
                        BHXH theo quy định của Nhà Nước;
                      </li>
                      <li>
                        Môi trường làm việc trẻ trung, sáng tạo và có cơ hội
                        thăng tiến
                      </li>
                    </ul>
                  </div>
                  <Button black onClick={handleClickRecruitment}>
                    ứng tuyển
                  </Button>
                </div>
              </li>
            </ul>
          </div>
        </Content>
      </Wrapper>
      <RecruitmentForm name={nameRecruitment} />
    </>
  );
};

const Wrapper = styled.div``;
const Desc = styled.div`
  padding: 8rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  p {
    font-size: 1.125rem;
    line-height: 1.75rem;
    text-align: justify;
  }
`;
const Message = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #0000004d;
    padding: 5rem;
    margin: 1rem;
    h1 {
      color: #fff;
      font-size: 3rem;
      line-height: 1;
      margin-bottom: 1rem;
    }
    .list {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 3rem;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      li {
        font-size: 14px;
        color: #fff;
      }
    }
  }
`;
const Content = styled.div`
  padding: 3.5rem;

  > div {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    > ul {
      padding: 1.5rem 0;
      display: flex;
      flex-direction: column;
      width: 50%;
      gap: 2rem;
      > li {
        padding: 1rem;
        border-bottom: 1px solid #e5e7eb;
        transition: all 0.2s;
        .title {
          display: flex;
          justify-content: space-between;
          align-items: center;

          cursor: pointer;
          h2 {
            font-size: 1.25rem;
            font-weight: 400;
          }
          svg {
            transition: all 0.2s;
            width: 1rem;
            height: 1rem;
          }
        }
        .content {
          padding: 1rem;
          margin-top: 1rem 0;
          background-color: rgb(248, 250, 252, 1);
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 1rem;
          display: none;
          background-color: rgb(241, 245, 249, 1);

          > div {
            padding: 1rem;
          }

          h3 {
            font-size: 1rem;
            font-weight: 700;
          }
          button {
            width: 33.33333%;
            margin-left: 1rem;
          }
          ul {
            display: grid;
            grid-template-columns: repeat(1, minmax(0, 1fr));
            gap: 0.25rem;

            li {
              line-height: 1.75;
              font-size: 14px;
            }
          }
        }

        &:hover {
          background-color: rgb(248, 250, 252, 1);
          box-shadow: 2px 0.1rem #e5e7eb;
        }

        &.active {
          .content {
            display: grid;
          }
          svg {
            transform: rotate(45deg);
          }
          background-color: rgb(248, 250, 252, 1);
        }
      }
    }
  }
  h1 {
    font-size: 1.5rem;
    margin-top: 1rem;
    text-align: center;
    font-weight: 400;
    text-transform: uppercase;
  }
`;

export default Recruitment;
