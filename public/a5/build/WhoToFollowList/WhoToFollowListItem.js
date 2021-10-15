const WhoToFollowListItem = (who) => {
    return (`
        
    <li class="list-group-item">                        
    <div class="row">
        <div class="col-2 col-xl-2 col-lg-3">
            <img src="${who.avatarIcon}" class="wd-rounded ml-0" alt="">
        </div>
        <div class="col-7 col-xl-7 col-lg-5">
            <b>${who.userName}</b>
            <i class="fas fa-check-circle"></i>
            <br>
            @${who.handle}
        </div>
        <div class="col-3 col-xl-3 col-lg-4">
            <button class="btn btn-primary wd-round-btn m-lg-2">
                Follow
            </button>
        </div>
    </div>
</li>
    
    ` );

}

export default WhoToFollowListItem;