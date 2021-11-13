import {
  IonApp,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonItem,
  IonList,
  IonSlide,
  IonSlides,
} from "@ionic/react";
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "./theme/variables.css";

export default function App() {
  const slideOpts = {
    slidesPerView: 1,
    spaceBetween: 0,
  };

  return (
    <IonApp>
      <IonContent>
        <IonSlides options={slideOpts}>
          <IonSlide style={{ flexDirection: "column" }}>
            <IonCard color="tertiary">
              <IonCardHeader>
                <IonCardTitle>
                  <p>Master Card</p>
                </IonCardTitle>
                <IonCardSubtitle>
                  <p>Monzo</p>
                </IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
            <IonList>
              <IonItem>
                <p>Pizza</p>
              </IonItem>
              <IonItem>
                <p>Rent</p>
              </IonItem>
              <IonItem>
                <p>Groceries</p>
              </IonItem>
            </IonList>
          </IonSlide>
          <IonSlide style={{ flexDirection: "column" }}>
            <IonCard color="success">
              <IonCardHeader>
                <IonCardTitle>
                  <p>Visa Card</p>
                </IonCardTitle>
                <IonCardSubtitle>
                  <p>Monzo</p>
                </IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
            <IonList>
              <IonItem>
                <p>Mini Golf</p>
              </IonItem>
              <IonItem>
                <p>Ice Cream</p>
              </IonItem>
              <IonItem>
                <p>Groceries</p>
              </IonItem>
            </IonList>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonApp>
  );
}
