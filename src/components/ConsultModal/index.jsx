import React from 'react';
import { Modal, Input, Button, Form } from 'antd';
import { Container } from '../styles';

const { TextArea } = Input;

const ConsultModal = ({ toggleVisible }) => {
  const [visible, setVisible] = toggleVisible;

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Modal
      closable={false} // Ẩn dấu x góc trên bên phải.
      visible={visible}
      onCancel={() => setVisible(false)} // Click ở ngoài hoặc nhấn esc để đóng modal.
      width={851}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      footer={null}
    >
      <Form name="consult" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Container fluid={true} width={771}>
          <div
            style={{
              marginBottom: 24,
              fontSize: 24,
              marginTop: 16,
              fontWeight: 'bold',
              color: '#2C2C2C',
              textAlign: 'center',
              height: 31,
            }}
          >
            Đăng Ký Nhận Báo Giá & Tư Vấn
          </div>
          <Form.Item name="name" noStyle>
            <Input placeholder="Tên liên hệ*" style={styles} />
          </Form.Item>
          <Form.Item name="phone" noStyle>
            <Input placeholder="Số điện thoại*" style={styles} />
          </Form.Item>
          <Form.Item name="email" noStyle>
            <Input placeholder="Địa chỉ email" style={styles} />
          </Form.Item>
          <Form.Item name="message" noStyle>
            <TextArea
              placeholder="Mô tả sản phẩm, dịch vụ..."
              rows={2}
              style={{
                ...styles,
                height: 'auto',
                resize: 'none',
              }}
            />
          </Form.Item>
          <Form.Item noStyle>
            <Button
              block
              style={{
                marginBottom: 16,
                fontSize: 16,
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
                height: 48,
                backgroundColor: '#2E99E1',
                borderRadius: 4,
              }}
              // onClick={() =>
              //   (window.location = 'mailto:leviettien1808 @gmail.com')
              // }
              htmlType="submit"
            >
              ĐĂNG KÝ NHẬN BÁO GIÁ
            </Button>
          </Form.Item>
        </Container>
      </Form>
    </Modal>
  );
};

export default ConsultModal;

const styles = {
  height: 55,
  borderRadius: 4,
  marginBottom: 24,
  fontSize: 16,
  padding: '16px 12px',
};
