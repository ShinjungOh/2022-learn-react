import {action, toJS} from 'mobx';
import { observer } from 'mobx-react-lite';
import {GenericInformation} from '../../components/Information';

import infoStore from '../../store/infoStore';

const About = observer(() => {
  const { person, device } = infoStore;

  console.log('person', toJS(person));

  /**
   * store에서 특정 값만 보여줘야 하는 경우도 종종 있습니다.
   * 이럴 때 중간 단계를 해주는 *Displayer 컴포넌트를 만들어줍니다.
   * TODO: 3. components/Information에서 작성을 완성해주세요!
   */
  console.log('About render');
  return (
    <div>
      <GenericInformation getInfo={() => person.name} />
      <button
        className="change-name button"
        onClick={action(() => {
          person.name = 'howdy-mj';
        })}
      >
        클릭
      </button>

      <br />
      <GenericInformation getInfo={() => person.job} />
      <GenericInformation getInfo={() => device} />
    </div>
  );
});

export default About;
