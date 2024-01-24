import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/fake-chat.ts',
      name: 'FakeChat',
      formats: ['es', 'umd'],
      fileName: 'fake-chat'
    },
  },
  plugins: [dts()],
});
