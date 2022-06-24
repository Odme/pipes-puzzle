import { ContentCanvas } from './components/ContentCanvas';
import { Content } from './components/General/Content';
import { Layout } from './components/General/Layout';
import { Heading } from './components/Heading';

const App = () => (
  <Layout>
    <Heading />
    <Content>
      <ContentCanvas />
    </Content>
  </Layout>
);

export default App;
