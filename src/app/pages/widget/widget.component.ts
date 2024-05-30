import { Component } from '@angular/core';
import { ProductWidget, ProductWidgetComponent } from '../../shared/components/product-widget/product-widget.component';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [ProductWidgetComponent],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss'
})
export class WidgetComponent {
  firstWidget: ProductWidget[] = [
    {
      title: 'Cleaning Tools & Vacuums',
      imageUrl: 'https://images-fe.ssl-images-amazon.com/images/G/65/00/XCM_Manual_1539432_SG_2x_desktop_quad_card_372x232_01_07add69e-e67d-4760-bdad-401c86ad44ad1._SY116_CB614248338_.jpg',
    },
    {
      title: 'Home Storage',
      imageUrl: 'https://images-fe.ssl-images-amazon.com/images/G/65/SG-hq/2023/img/Home/XCM_Manual_1539432_2889221_5360019_186x116_1X_en_SG._SY116_CB614246319_.jpg',
    },
    {
      title: 'Home Decor',
      imageUrl: 'https://images-fe.ssl-images-amazon.com/images/G/65/SG-hq/2023/img/Home/XCM_Manual_1539432_2889221_5360017_186x116_1X_en_SG._SY116_CB614246319_.jpg',
    },
    {
      title: 'Bedding',
      imageUrl: 'https://images-fe.ssl-images-amazon.com/images/G/65/SG-hq/2023/img/Home/XCM_Manual_1539432_2889221_5360018_186x116_1X_en_SG._SY116_CB614246319_.jpg',
    },
  ];

  secondWidget: ProductWidget[] = [
    {
      "title": "Barbie",
      "imageUrl": "https://images-fe.ssl-images-amazon.com/images/G/65/BAU/2024/XCM_CUTTLE_1707430_3699868_372x232_2X_en_SG._SY116_CB561111064_.jpg"
    },
    {
      "title": "Magic the gathering",
      "imageUrl": "https://images-fe.ssl-images-amazon.com/images/G/65/BAU/2024/XCM_CUTTLE_1707430_3699865_186x116_1X_en_SG._SY116_CB561111064_.jpg"
    },
    {
      "title": "Pokemon",
      "imageUrl": "https://images-fe.ssl-images-amazon.com/images/G/65/BAU/2024/XCM_CUTTLE_1707430_3699866_186x116_1X_en_SG._SY116_CB561111064_.jpg"
    },
    {
      "title": "Sylvanian families",
      "imageUrl": "https://images-fe.ssl-images-amazon.com/images/G/65/BAU/2024/XCM_CUTTLE_1707430_3699867_186x116_1X_en_SG._SY116_CB561111064_.jpg"
    }
  ];

  thirdWidget: ProductWidget[] = [
    {
      "title": "Skincare",
      "imageUrl": "https://images-fe.ssl-images-amazon.com/images/G/65/SG-hq/2022/img/Beauty_Mass_/XCM_Manual_1465757_2564686_4988019_186x116_1X_en_SG._SY116_CB609970016_.jpg"
    },
    {
      "title": "Makeup",
      "imageUrl": "https://images-fe.ssl-images-amazon.com/images/G/65/SG-hq/2022/img/Beauty_Mass_/XCM_Manual_1465757_2564686_4988021_186x116_1X_en_SG._SY116_CB609969562_.jpg"
    },
    {
      "title": "Nails",
      "imageUrl": "https://images-fe.ssl-images-amazon.com/images/G/65/SG-hq/2022/img/Beauty_Mass_/XCM_Manual_1465757_2564686_4988018_186x116_1X_en_SG._SY116_CB609970016_.jpg"
    },
    {
      "title": "Fragrances",
      "imageUrl": "https://images-fe.ssl-images-amazon.com/images/G/65/SG-hq/2022/img/Beauty_Mass_/XCM_Manual_1465757_2564685_4988014_186x116_1X_en_SG._SY116_CB609970016_.jpg"
    }
  ];
}
