import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LikesProvider } from '../context/LikesContext';
import LikeButton from './LikeButton';

test('увеличивает счётчик лайков при клике', async () => {
  // Arrange
  render(
    <LikesProvider>
      <LikeButton />
    </LikesProvider>
  );

  // Act
  const button = screen.getByRole('button');
  await userEvent.click(button);

  // Assert
  expect(screen.getByText('1')).toBeInTheDocument();
});