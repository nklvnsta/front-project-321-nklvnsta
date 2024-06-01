import React, { createContext, useContext, ReactNode } from "react";
import { render } from "@testing-library/react";

// Хук useAuth
interface AuthContextType {
  isAuth: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ isAuth: boolean; children: ReactNode }> = ({ isAuth, children }) => {
  return <AuthContext.Provider value={{ isAuth }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth должен использоваться внутри AuthProvider");
  }
  return context;
};

// Компонент RequiredAuth
const RequiredAuth: React.FC = ({ children }) => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <div>Authorized only!</div>;
  }

  return <>{children}</>;
};

export default RequiredAuth;

// Тесты для компонента RequiredAuth
describe("RequiredAuth компонент", () => {
  test("рендерит детей, если аутентифицирован", () => {
    const { getByText } = render(
      <AuthProvider isAuth={true}>
        <RequiredAuth>
          <div>Children component</div>
        </RequiredAuth>
      </AuthProvider>
    );
    expect(getByText("Children component")).toBeInTheDocument();
  });

  test("рендерит 'Authorized only!' если не аутентифицирован", () => {
    const { getByText } = render(
      <AuthProvider isAuth={false}>
        <RequiredAuth>
          <div>Children component</div>
        </RequiredAuth>
      </AuthProvider>
    );
    expect(getByText("Authorized only!")).toBeInTheDocument();
  });
});
