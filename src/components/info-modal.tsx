// Libraries
import React from "react";
import CloseButton from "./close-button";
import { Store } from "../store";
import { observer } from "mobx-react";

class HelpContents extends React.Component<{ onClose: () => void }> {
  render() {
    return (
      <div className="helpContents maxWidth">
        <div className="headingContainer">
          <div className="closeButtonContainer">
            <CloseButton onClose={this.props.onClose} />
          </div>
          <h4>Manual</h4>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit
          amet odio et orci fringilla vehicula. Maecenas non orci sed nulla
          pharetra fermentum. Donec viverra eleifend bibendum. Curabitur
          tincidunt ac leo sit amet vestibulum. Vivamus efficitur ornare
          ultrices. In in faucibus diam. Phasellus dictum nisl sit amet bibendum
          dictum. Proin at odio ante. Donec posuere risus a sapien euismod, quis
          dapibus ligula malesuada. Fusce a dignissim nibh. Sed suscipit
          molestie fermentum. Vestibulum efficitur metus vitae pharetra blandit.
          Nam eu elit ultricies neque hendrerit fermentum id et dui. Morbi ex
          neque, elementum gravida consectetur a, accumsan at erat. Curabitur
          fringilla luctus ipsum et scelerisque. In non lectus a tellus
          porttitor pharetra. Suspendisse sed ornare risus. Etiam dictum
          placerat diam. Nunc lacus erat, dignissim vel risus eget, interdum
          vestibulum odio. Morbi augue sapien, finibus vel diam vel, tristique
          eleifend lacus. Aliquam rutrum ultrices sapien eu pellentesque.
          Curabitur malesuada, odio id pulvinar pharetra, tellus risus suscipit
          risus, id suscipit nisl elit id sapien. Integer at lorem eu nisi
          semper fringilla a nec orci. Praesent sagittis hendrerit arcu id
          porttitor. In congue, nibh eu mattis dictum, elit massa lobortis nisi,
          et congue mauris purus eget orci. Vestibulum aliquet volutpat porta.
          Aliquam eget malesuada mauris. Proin sed arcu enim. Etiam dui ante,
          accumsan vel elementum ut, aliquet vel sem. Fusce massa dui,
          pellentesque id tortor a, efficitur posuere velit. Nulla viverra dui
          in magna luctus aliquet. Mauris placerat ultricies lorem id
          consectetur. Pellentesque a ex elementum libero imperdiet varius quis
          luctus sem. Etiam luctus velit in rhoncus pulvinar. Ut magna massa,
          posuere quis vehicula at, sollicitudin sed ante. Cras consequat et leo
          vitae mollis. Phasellus euismod rutrum leo non posuere. Vivamus metus
          quam, fringilla at risus a, scelerisque egestas eros. In quis nisl a
          diam mollis euismod eget in elit. Vivamus non ante non nulla mattis
          vestibulum eget vel urna. Vivamus ac magna lacus. Phasellus a orci et
          leo fermentum molestie. Morbi condimentum lectus eu aliquam sagittis.
          Nullam et odio ligula. Sed tincidunt diam in tempor vulputate. Duis
          quis sagittis enim. Fusce a erat consectetur nunc lacinia euismod id
          nec sem. Pellentesque vel ante ut nulla porttitor aliquam quis et ex.
          Proin faucibus, mi eget pretium bibendum, ex quam rutrum tortor, et
          varius leo lorem non mauris. Praesent nibh mauris, dictum sit amet
          eleifend gravida, efficitur a lectus. Duis luctus lorem sit amet
          efficitur sollicitudin. Sed elementum placerat massa ac vulputate.
          Donec vel egestas nibh, dignissim euismod nisl. Pellentesque sem enim,
          luctus fringilla viverra ac, dapibus sit amet leo. Cras id ante id
          risus laoreet sollicitudin eget eu risus. Curabitur pellentesque,
          lacus et lobortis ornare, enim est pharetra quam, id semper felis
          ligula ut massa. Mauris ex turpis, maximus et magna fermentum, tempor
          hendrerit libero. Quisque egestas, eros vel dictum lobortis, mauris
          orci pellentesque lectus, at lacinia metus lectus in nunc. Nam nec mi
          in orci vehicula volutpat. Praesent ex elit, placerat sed semper
          pretium, suscipit at ante. Nam suscipit risus quis nibh auctor
          viverra.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit
          amet odio et orci fringilla vehicula. Maecenas non orci sed nulla
          pharetra fermentum. Donec viverra eleifend bibendum. Curabitur
          tincidunt ac leo sit amet vestibulum. Vivamus efficitur ornare
          ultrices. In in faucibus diam. Phasellus dictum nisl sit amet bibendum
          dictum. Proin at odio ante. Donec posuere risus a sapien euismod, quis
          dapibus ligula malesuada. Fusce a dignissim nibh. Sed suscipit
          molestie fermentum. Vestibulum efficitur metus vitae pharetra blandit.
          Nam eu elit ultricies neque hendrerit fermentum id et dui. Morbi ex
          neque, elementum gravida consectetur a, accumsan at erat. Curabitur
          fringilla luctus ipsum et scelerisque. In non lectus a tellus
          porttitor pharetra. Suspendisse sed ornare risus. Etiam dictum
          placerat diam. Nunc lacus erat, dignissim vel risus eget, interdum
          vestibulum odio. Morbi augue sapien, finibus vel diam vel, tristique
          eleifend lacus. Aliquam rutrum ultrices sapien eu pellentesque.
          Curabitur malesuada, odio id pulvinar pharetra, tellus risus suscipit
          risus, id suscipit nisl elit id sapien. Integer at lorem eu nisi
          semper fringilla a nec orci. Praesent sagittis hendrerit arcu id
          porttitor. In congue, nibh eu mattis dictum, elit massa lobortis nisi,
          et congue mauris purus eget orci. Vestibulum aliquet volutpat porta.
          Aliquam eget malesuada mauris. Proin sed arcu enim. Etiam dui ante,
          accumsan vel elementum ut, aliquet vel sem. Fusce massa dui,
          pellentesque id tortor a, efficitur posuere velit. Nulla viverra dui
          in magna luctus aliquet. Mauris placerat ultricies lorem id
          consectetur. Pellentesque a ex elementum libero imperdiet varius quis
          luctus sem. Etiam luctus velit in rhoncus pulvinar. Ut magna massa,
          posuere quis vehicula at, sollicitudin sed ante. Cras consequat et leo
          vitae mollis. Phasellus euismod rutrum leo non posuere. Vivamus metus
          quam, fringilla at risus a, scelerisque egestas eros. In quis nisl a
          diam mollis euismod eget in elit. Vivamus non ante non nulla mattis
          vestibulum eget vel urna. Vivamus ac magna lacus. Phasellus a orci et
          leo fermentum molestie. Morbi condimentum lectus eu aliquam sagittis.
          Nullam et odio ligula. Sed tincidunt diam in tempor vulputate. Duis
          quis sagittis enim. Fusce a erat consectetur nunc lacinia euismod id
          nec sem. Pellentesque vel ante ut nulla porttitor aliquam quis et ex.
          Proin faucibus, mi eget pretium bibendum, ex quam rutrum tortor, et
          varius leo lorem non mauris. Praesent nibh mauris, dictum sit amet
          eleifend gravida, efficitur a lectus. Duis luctus lorem sit amet
          efficitur sollicitudin. Sed elementum placerat massa ac vulputate.
          Donec vel egestas nibh, dignissim euismod nisl. Pellentesque sem enim,
          luctus fringilla viverra ac, dapibus sit amet leo. Cras id ante id
          risus laoreet sollicitudin eget eu risus. Curabitur pellentesque,
          lacus et lobortis ornare, enim est pharetra quam, id semper felis
          ligula ut massa. Mauris ex turpis, maximus et magna fermentum, tempor
          hendrerit libero. Quisque egestas, eros vel dictum lobortis, mauris
          orci pellentesque lectus, at lacinia metus lectus in nunc. Nam nec mi
          in orci vehicula volutpat. Praesent ex elit, placerat sed semper
          pretium, suscipit at ante. Nam suscipit risus quis nibh auctor
          viverra.
        </p>
      </div>
    );
  }
}

interface HelpProps {
  store: Store;
  onClose: () => void;
}

@observer
export class HelpModal extends React.Component<HelpProps> {
  render() {
    const { store } = this.props;
    return (
      <div className={store.helpVisible ? "helpModalContainer" : "hidden"}>
        <div className="circleReveal">
          <HelpContents onClose={this.props.onClose} />
        </div>
      </div>
    );
  }
}
