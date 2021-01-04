import React from 'react';
import { Typography, Button, Form, message, Input, Icon } from 'antd';

const { TextArea } = Input;
const { Title } = Typography;

function VideoUploadPage() {
  


  return (
    <div style={{ maxWidth: '700px', margin: '2em auto',}}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Title level={2}>Upload Video</Title>
      </div>

      <Form onSubmit>
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          {/* Drop zone */}
          
          {/* Thumbnail */}
          <div>
            <img src alt />
          </div>
        </div>

        <br />
        <br />
        
        <label>Title</label>
        <Input 
          onChange
          value
        />

        <br />
        <br />

        <label>Description</label>
        <TextArea 
          onChange
          value
        />

        <br />
        <br />

        <select onChange>
          <option key value></option>
        </select> 

        <br />
        <br />

        <select onChange>
          <option key value></option>
        </select> 
        
        <br />
        <br />

        <Button type="primary" size="large" onClick>
          Submit
        </Button>
      </Form>
    </div>  
  )
}

export default VideoUploadPage