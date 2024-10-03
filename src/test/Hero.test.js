import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hero from '../landing_page/home/Hero';

// Test Suite

describe('Hero Component', ()=> {
    test('renders hero image', () => {
        render(<Hero />);
        const heroImage = screen.getByAltText('hero image');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src', 'media/images/homeHero.png');
    });

    test('renders button', () => {
        render(<Hero />);
        const signUpButton = screen.getByRole('button', {name: "/Signup Now/"});
        expect(signUpButton).toBeInTheDocument();
        expect(signUpButton).toHaveClass("btn-primary");
    });
})