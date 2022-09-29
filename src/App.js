import { Route, Routes } from 'react-router-dom';
import { ViewNotes } from './pages/ViewNotes';
import { ArchivePages } from './pages/ArchivePages';
import { DetailPages } from './pages/DetailPages';

const App = () => {
  // inisiasi variabel paths
  const paths = [
    {
      path: '/',
      element: <ViewNotes />
    },
    {
      path: '/notes/new',
      element: <h1>Add Note Page</h1>
    },
    {
      path: '/notes/:id',
      element: <DetailPages />
    },
    {
      path: '/archived',
      element: <ArchivePages />
    },
    {
      path: '/*',
      element: <h1>404 Page Not Found</h1>
    }
  ]

  return (
    <>
      <Routes>
        { paths.map( (itemPath, index) => (<Route key={index} {...itemPath} />)) }
      </Routes>
    </>
  );
}

export default App;
