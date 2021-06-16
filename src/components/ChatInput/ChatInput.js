import React, { useState, useCallback } from 'react';
import { Button, Input } from 'antd';
import { SmileOutlined, CameraOutlined } from '@ant-design/icons';
import { AudioOutlined, SendOutlined } from '@ant-design/icons';
import { UploadField } from '@navjobs/upload';
import { Picker } from 'emoji-mart';

import './ChatInput.css';
import useChatInput from './hooks';

const ChatInput = () => {
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const { value, setValue, onSendMessage } = useChatInput();

  const toggleEmojiPicker = useCallback(() => {
    setEmojiPickerVisible(!emojiPickerVisible);
  }, [emojiPickerVisible]);

  return (
    <div className='chat-input'>
      <div className='chat-input__smile-btn'>
        {emojiPickerVisible && (
          <div className='chat-input__emoji-picker'>
            <Picker set='apple' />
          </div>
        )}
        <Button
          onClick={toggleEmojiPicker}
          type='ghost'
          shape='circle'
          icon={<SmileOutlined />}
        />
      </div>
      <Input
        onChange={(event) => setValue(event.target.value)}
        onPressEnter={onSendMessage}
        value={value}
        size='large'
        placeholder='Введите текст сообщения...'
      />
      <div className='chat-input__actions'>
        <UploadField
          onFiles={(files) => console.log(files)}
          containerProps={{
            className: 'chat-input__files',
          }}
          uploadProps={{
            accept: '.jpg, .jpeg, .png, .gif, .bmp, .pdf,.doc,.docx,.txt,.rtf',
            multiple: 'multiple',
          }}
        >
          <Button type='ghost' shape='circle' icon={<CameraOutlined />} />
        </UploadField>
        {value ? (
          <Button type='ghost' shape='circle' icon={<SendOutlined />} />
        ) : (
          <Button type='ghost' shape='circle' icon={<AudioOutlined />} />
        )}
      </div>
    </div>
  );
};

export default React.memo(ChatInput);
