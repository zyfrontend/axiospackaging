import { Button, Image as VanImage, ImagePreview, Icon } from 'vant';

export function vant(app) {
  app.use(ImagePreview);
  app.use(VanImage);
  app.use(Button);
  app.use(Icon);
}
export default {
  components: {
    [ImagePreview.Component.name]: ImagePreview.Component
  }
};
