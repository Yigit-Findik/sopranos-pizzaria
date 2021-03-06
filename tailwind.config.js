module.exports = {
  purge: {
    mode: 'layers',
    content: ['./public/**/*.html/'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        //custom heights added for smoother development
        112: '28rem',
        120: '30rem',
        128: '32rem',
        136: '34rem',
        144: '36rem',
        152: '38rem',
        190: '47.5rem',
        240: '60rem',
        256: '62rem',
        300: '73rem',
        325: '79rem',
        350: '85rem',
        375: '91rem'
      },

      //custom width added for smoother development
      width: {
        112: '28rem',
        120: '30rem',
        128: '32rem',
        136: '34rem',
        144: '36rem',
        152: '38rem',
        190: '47.5rem',
        240: '60rem',
        256: '62rem',
        300: '73rem',
        325: '79rem',
        350: '85rem',
        375: '91rem'
      },

      screens: {
        'tel': '350px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}