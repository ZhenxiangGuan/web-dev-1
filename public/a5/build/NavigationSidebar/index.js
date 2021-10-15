const NavigationSidebar = () => {
    return(`
    <div class="list-group">
    <a href="#" class="list-group-item">
        <i class="fab fa-twitter"></i></a>

    <a href="#" class="list-group-item">
        <div class="d-none d-xl-block">
        <i class="fas fa-home"></i>
        <span class="ml-1">                      
            Home                  
        </span>
        </div>

        <div class="d-xl-none">
            <i class="fas fa-home"></i>
        </div>

    </a>

    <a href="#" class="list-group-item active">
        <div class="d-none d-xl-block">
        <i class="fas fa-hashtag"></i>
        <span class="ml-1">                      
            Explore                 
        </span>
        </div>

        <div class="d-xl-none">
            <i class="fas fa-hashtag"></i>
        </div>

    </a>

    <a href="#" class="list-group-item">
        <div class="d-none d-xl-block">
        <i class="fas fa-bell"></i>
        <span class="ml-1">                      
            Notification                
        </span>
        </div>

        <div class="d-xl-none">
            <i class="fas fa-bell"></i>
        </div>

    </a>


    <a href="#" class="list-group-item">
        <div class="d-none d-xl-block">
        <i class="fas fa-envelope"></i>
        <span class="ml-1">                      
            Message                 
        </span>
        </div>

        <div class="d-xl-none">
            <i class="fas fa-envelope"></i>
        </div>

    </a>

    <a href="#" class="list-group-item">
        <div class="d-none d-xl-block">
        <i class="fas fa-bookmark"></i>
        <span class="ml-1">                      
            Bookmarks                  
        </span>
        </div>

        <div class="d-xl-none">
            <i class="fas fa-bookmark"></i>
        </div>

    </a>
    
    <a href="#" class="list-group-item">
        <div class="d-none d-xl-block">
        <i class="fas fa-list"></i>
        <span class="ml-1">                      
            Lists                 
        </span>
        </div>

        <div class="d-xl-none">
            <i class="fas fa-list"></i>
        </div>

    </a>

    <a href="#" class="list-group-item">
        <div class="d-none d-xl-block">
        <i class="fas fa-user-alt"></i>
        <span class="ml-1">                      
            Profile                  
        </span>
        </div>

        <div class="d-xl-none">
            <i class="fas fa-user-alt"></i>
        </div>

    </a>
    
    <a href="#" class="list-group-item">
        <div class="d-none d-xl-block">
        <i class="fas fa-ellipsis-h wd-more "></i>
        <span class="ml-1">                      
            More                 
        </span>
        </div>

        <div class="d-xl-none">
        <i class="fas fa-ellipsis-h wd-more "></i>
        </div>

    </a>
    
</div>

<button type="button" class="btn btn-primary wd-round-btn mt-2 p-lg-1">Tweet</button>
    `);
}
export default NavigationSidebar;
