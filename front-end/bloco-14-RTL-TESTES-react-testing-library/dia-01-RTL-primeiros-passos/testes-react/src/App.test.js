import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('testa se o input e o botão enviar estão funcionando', () => {
  render(<App />);

  const saveEmail = 'alex@hotmail.com';

  const saida = screen.getByTestId('id-email-user');
  expect(saida).toBeInTheDocument();
  expect(saida).toHaveTextContent('Valor');

  const botao = screen.getByTestId('id-send');
  const emailInput = screen.getByLabelText('Email');
  userEvent.type(emailInput, saveEmail);
  userEvent.click(botao);
  

  
  expect(emailInput).toHaveValue('');
  expect(saida).toHaveTextContent(`Valor: ${saveEmail}`);
})


