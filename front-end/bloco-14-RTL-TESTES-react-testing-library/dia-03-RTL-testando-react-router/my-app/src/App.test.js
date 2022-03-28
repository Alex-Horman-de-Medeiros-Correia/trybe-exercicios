import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('testando a aplicação toda', () => {

  it('deve renderizar o componente App', () => {
    renderWithRouter(<App />);
  
    const homeTitle = screen.getByRole('heading', {
      name: 'Você está na página Início',
    });
    expect(homeTitle).toBeInTheDocument();
  });
  
  
  it('deve renderizar o componente Sobre', () => {
    const { history } = renderWithRouter(<App />);
  
    
    const aboutLink = screen.getByRole('link', { name: 'Sobre' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);
    
    console.log(history);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  
    const aboutTitle = screen.getByRole('heading',
      { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/app/essa-pagina-nao-deve-ser-encontada');

    const titleNotFound = screen.getByRole('heading', { name: 'Página não encontrada' });
    expect(titleNotFound).toBeInTheDocument();
  })
});
