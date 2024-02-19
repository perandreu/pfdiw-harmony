import OptionsBar from '../../components/OptionsBar';
import AllFriends from '../../components/AllFriends';

function FriendsView() {
    return(
        <div className='row col-10 g-0'>
            <OptionsBar type="friends"/>
            <AllFriends />
        </div>
    )
}

export default FriendsView;