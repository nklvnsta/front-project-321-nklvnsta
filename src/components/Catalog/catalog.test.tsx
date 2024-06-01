import { describe, beforeAll, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Catalog from "./index";

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // Deprecated
      removeListener: vi.fn(), // Deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });

  global.IntersectionObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));
});

describe("Catalog", () => {
  test("отображает заголовок 'Каталог университетов'", () => {
    render(<Catalog />);
    const titleElement = screen.getByText("Каталог университетов");
    expect(titleElement).toBeInTheDocument();
  });

  test("отображает начальное значение страницы", () => {
    render(<Catalog />);
    const pageElement = screen.getByText("1");
    expect(pageElement).toBeInTheDocument();
  });

  test("уменьшает номер страницы при нажатии на кнопку 'Назад'", () => {
    render(<Catalog />);
    const backButton = screen.getByText("Назад");
    fireEvent.click(backButton);
    const pageElement = screen.getByText("1");
    expect(pageElement).toBeInTheDocument();
  });

  test("увеличивает номер страницы при нажатии на кнопку 'Вперёд'", () => {
    render(<Catalog />);
    const nextButton = screen.getByText("Вперёд");
    fireEvent.click(nextButton);
    const pageElement = screen.getByText("2");
    expect(pageElement).toBeInTheDocument();
  });

  test("загружает данные университетов", async () => {
    render(<Catalog />);
    const loadingElement = screen.getByText("Каталог университетов");
    expect(loadingElement).toBeInTheDocument();
    await screen.findByText("Страна");
    await screen.findByText("Название университета");
  });
});
