# FlashBag


### Step 1

Define a flashBag skeleton with a flashbag-skeleton id, a [type] class attribute and a [message] inside the block

    <div id="flashbag-skeleton" class="alert alert-%type%">%message%
        <a class="close" data-dismiss="alert" href="#">&times; }}</a>
    </div>

### Step 2

Just call $.FlashBag.add(type, message, options)

    $(document).ready(function() {
        $.FlashBag.add('success', 'My message', {autoclose: true});
    });
