import Flick from './index';

describe('Flick', () => {
  it('should extend Array', () => {
    expect(Flick.prototype.constructor.isArray).toBeFunction();
  });
  describe('#next', () => {
    it('steps through by +1', () => {
      const names = new Flick('Jim', 'Jil', 'Joe', 'Bob');
      expect(names.next()).toEqual('Jim');
      expect(names.next()).toEqual('Jil');
      expect(names.next()).toEqual('Joe');
      expect(names.next()).toEqual('Bob');
      expect(names.next()).toEqual('Jim');
      expect(Array(...names)).toEqual(['Jim', 'Jil', 'Joe', 'Bob']);
    });
  });
  describe('#prev', () => {
    it('steps through by -1', () => {
      const names = new Flick('Bob', 'Joe', 'Jil', 'Jim');
      expect(names.prev()).toEqual('Jim');
      expect(names.prev()).toEqual('Jil');
      expect(names.prev()).toEqual('Joe');
      expect(names.prev()).toEqual('Bob');
      expect(names.prev()).toEqual('Jim');
      expect(Array(...names)).toEqual(['Bob', 'Joe', 'Jil', 'Jim']);
    });
  });

  describe('#next with custom step size', () => {
    it('steps through given size', () => {
      const names = new Flick('Bob', 'Joe', 'Jil', 'Jim');
      expect(names.next(2)).toEqual('Joe');
      expect(names.next(2)).toEqual('Jim');
      expect(names.next(2)).toEqual('Joe');
      expect(names.next(9)).toEqual('Jil');
    });

    it('works with step sizes < array length * -1', () => {
      const names = new Flick('Jim', 'Jil');
      expect(names.next(-7)).toEqual('Jil');
      expect(names.next(-7)).toEqual('Jim');
      expect(names.next(-7)).toEqual('Jil');
      expect(Array(...names)).toEqual(['Jim', 'Jil']);
    });

    it('works with step sizes > array length', () => {
      const names = new Flick('Jim', 'Jil');
      expect(names.next(7)).toEqual('Jim');
      expect(names.next(7)).toEqual('Jil');
      expect(names.next(7)).toEqual('Jim');
      expect(Array(...names)).toEqual(['Jim', 'Jil']);
    });
  });

  describe('#prev with custom step size', () => {
    it('steps through given size', () => {
      const names = new Flick('Jim', 'Jil', 'Joe', 'Bob');
      expect(names.prev(2)).toEqual('Joe');
      expect(names.prev(2)).toEqual('Jim');
      expect(names.prev(2)).toEqual('Joe');
      expect(names.prev(9)).toEqual('Jil');
      expect(Array(...names)).toEqual(['Jim', 'Jil', 'Joe', 'Bob']);
    });

    it('works with step sizes < array length * -1', () => {
      const names = new Flick('Jim', 'Jil');
      expect(names.prev(-7)).toEqual('Jim');
      expect(names.prev(-7)).toEqual('Jil');
      expect(names.prev(-7)).toEqual('Jim');
      expect(Array(...names)).toEqual(['Jim', 'Jil']);
    });

    it('works with step sizes > array length', () => {
      const names = new Flick('Jim', 'Jil');
      expect(names.prev(7)).toEqual('Jil');
      expect(names.prev(7)).toEqual('Jim');
      expect(names.prev(7)).toEqual('Jil');
      expect(Array(...names)).toEqual(['Jim', 'Jil']);
    });
  });
});
