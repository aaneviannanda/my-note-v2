import { Route, Routes } from 'react-router-dom';
import { ViewNotes } from './pages/ViewNotes';
import { ArchivePages } from './pages/ArchivePages';
import { DetailPages } from './pages/DetailPages';
import { PageNotFound } from './components/PageNotFound';
import { AddNotePages } from './pages/AddNotePages';

const App = () => {
  // inisiasi variabel paths
  const paths = [
    {
      path: '/',
      element: <ViewNotes />
    },
    {
      path: '/notes/new',
      element: <AddNotePages />
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
      element: <PageNotFound />
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
