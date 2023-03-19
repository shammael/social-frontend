import IGroup from '@/interfaces/group';
import Container from '../Container';
import Divider from '../Divider';
import GroupInfo from './group-info';

const groupList: IGroup[] = [
  {
    name: 'NodeJS en español',
    notifications: 0,
    imgUrl:
      'https://scontent.fmar7-1.fna.fbcdn.net/v/t31.18172-8/14258332_10155041940970400_4228303432829242173_o.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=8631f5&_nc_ohc=Uy8A5s5nQaEAX--8Wyi&_nc_ht=scontent.fmar7-1.fna&oh=00_AfCx4u8I3k9LNbfLdlVCKRMVCqj6D7y-q4PEOCwRpA9dDw&oe=6436E67A',
    id: 'g-1',
  },
  {
    name: 'React Dev en español',
    notifications: 20,
    imgUrl:
      'https://scontent.fmar7-1.fna.fbcdn.net/v/t39.30808-6/299429617_1267768560705153_6845640585075834224_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8631f5&_nc_ohc=k1ipiTaFHV0AX9pIw5N&_nc_ht=scontent.fmar7-1.fna&oh=00_AfDx4h-0JzxKogl-Y8KLyPrIJ0mw7_CkycvkkJc_QWbMUg&oe=6414E9B2',
    id: 'g-2',
  },
];

const GroupList = () => {
  return (
    <Container>
      <h3 className="text-sm text-slate-500 dark:text-neutral-300">
        Your groups
      </h3>
      <Divider />
      {groupList.map((group) => (
        <GroupInfo key={group.id} group={group} />
      ))}
    </Container>
  );
};

export default GroupList;
