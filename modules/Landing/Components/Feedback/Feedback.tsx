'use client';
import Btn from '@/components/UI/Btn/Btn';
import {Form, Input} from 'antd';
import React, {FC} from 'react';

import s from './Feedback.module.scss';
import { useMutation } from 'react-query';
import { SendQuestion } from '@/modules/Marketplace/api';

interface FeedbackProps {}

export const Feedback: FC<FeedbackProps> = () => {
  const {mutate, isLoading} = useMutation(SendQuestion);

  const onFinish = (values: any) => {
    mutate(values);
  };

  return (
    <div className={s.container} id='feedback'>
      <div className='mb-[40px] text-center'>
        <h1 className={s.title}>
          Не нашел свою нишу на маркетплейсе <span className='text-primary-500 ml-2'>?</span>
        </h1>
        <p className='text-gray-500'>Заполни форму и я решу твои проблемы в течении суток</p>
      </div>

      <div className='flex justify-center'>
        <div className={s.wrapper}>
          <Form 
            layout='vertical'
            onFinish={onFinish}
          >
            <Form.Item 
              label={'Имя'}
              name={'name'}
              rules={[{ required: true, message: 'Вы пропустили имя!' }]}
            >
              <Input style={{background: '#131129'}} size='large' />
            </Form.Item>
            <Form.Item 
              label={'Email'}
              name={'email'}
              rules={[{ required: true, message: 'Введите Email!' }]}
            >
              <Input style={{background: '#131129'}} size='large' />
            </Form.Item>
            <Form.Item 
              label={'Вопрос'}
              name={'question'}
              rules={[{ required: true, message: 'Поле с вопросом осталось пустым!' }]}
            >
              <Input.TextArea
                style={{background: '#131129', color: '#fff'}}
                autoSize={{minRows: 3, maxRows: 3}}
                size='large'
              />
            </Form.Item>

            <Btn 
              type='submit'
              loading={isLoading}
            >
              Отправить
            </Btn>
          </Form>
        </div>
      </div>
    </div>
  );
};
