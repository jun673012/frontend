import { useStore } from '../../store/store';
import styled from 'styled-components';

const ChatMainContents = () => {
  const selectedCategory = useStore((state) => state.selectedCategory);
  const selectedChannel = useStore((state) => state.selectedChannel);

  return (
    <Container>
      {!selectedChannel ? 
        <div>채널을 선택해주세요.</div> 
      : 
        <Content>
          {'선택된 카테고리 : ' + selectedCategory}
          <br />
          {'선택된 채널 : ' + selectedChannel}
          <br />
          {selectedCategory + ' 카테고리의 ' + selectedChannel + ' 채널 채팅 : '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis. Commodi laborum dolore tempora. Quia fuga, quidem, quo quaerat, praesentium sapiente aliquid id commodi modi deserunt harum amet sit perspiciatis!
        </Content>
      }
    </Container>
  );
}

const Container = styled.div`
  height: calc(100vh - 76px - 98px);
  overflow: auto;
  margin-top: 76px;
`;
const Content = styled.div`
`;

export default ChatMainContents;
