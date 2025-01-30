import React from 'react';
import { Modal, Form, Input, Button, message } from 'antd';
import styles from './ContactModal.module.css';
import axios from 'axios';

function ContactModal({ isOpen, onClose }) {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        'https://port-backend-nine.vercel.app/api/contact',
        values,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (response.status === 201) {
        message.success('Message sent successfully!');
        form.resetFields();
        onClose();
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      message.error('Failed to send message, try again later.');
    }
  };

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      className={styles.modal}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className={styles.form}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name!' }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email!' },
            { type: 'email', message: 'Please enter a valid email!' },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: 'Please enter your message!' }]}
        >
          <Input.TextArea rows={4} placeholder="Enter your message" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.submitBtn}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ContactModal;
