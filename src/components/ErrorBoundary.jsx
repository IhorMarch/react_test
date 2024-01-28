import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Метод викликається, коли виникає помилка у внутрішніх компонентах
  componentDidCatch(error, info) {
    console.error('Error caught by ErrorBoundary:', error, info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Відображення альтернативного інтерфейсу при виникненні помилки
      return <h1>Something went wrong!</h1>;
    }

    // Якщо помилок немає, просто відображаємо дочірні компоненти
    return this.props.children;
  }
}

export default ErrorBoundary;