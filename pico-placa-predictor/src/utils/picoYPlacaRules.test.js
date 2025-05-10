import { describe, it, expect } from 'vitest';
import { canDrive } from './picoYPlacaRules';

// Test cases for the canDrive function

// Tests are in spanish because was easier to understand the logic for me.
describe('canDrive', () => {
  it('permite circular un sábado (sin restricción)', () => {
    expect(canDrive('PBA-1234', '2025-05-10', '08:00')).toBe(true);
  });

  it('no permite circular un lunes con placa terminada en 1 y hora pico', () => {
    expect(canDrive('PBA-1231', '2025-05-12', '08:00')).toBe(false);
  });

  it('permite circular fuera del horario restringido', () => {
    expect(canDrive('PBA-1231', '2025-05-12', '11:00')).toBe(true);
  });

  it('permite circular si la placa no tiene dígito final válido', () => {
    expect(canDrive('XXX-ABCD', '2025-05-12', '08:00')).toBe(true);
  });
});

// This tests helped me to understand the logic of the function canDrive.
// Date objects are tricky, so I had to test the function with different dates and times before
// understanding how it works. In order to resolve the day problem, I had use other way to manage the date.