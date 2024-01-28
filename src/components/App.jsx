
import { Questions } from './Questions/Questions'
import { GlobalStyle } from './GlobalStyles';
import ErrorBoundary from './ErrorBoundary';

export const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <Questions />
      </ErrorBoundary>
      <GlobalStyle />
    </div>
  );
};
