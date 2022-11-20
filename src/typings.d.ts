export {};
/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare global {
  interface Window {
    Square: any;
  }
}
