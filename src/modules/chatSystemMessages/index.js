import * as Peeker from '$Peeker';

Peeker.registerListener('messageEvent', callback);

function callback(message, data) {
    if (data.props?._enhancer_system_message) message.classList.add('te-system-message');
    const username =
        data?.props?.message?.user.displayName?.toLowerCase() ||
        data?.props?.message?.user.userDisplayName?.toLowerCase();
    if (!username) return;
    if (username !== 'twitch_enhancer') return;
    // const content = data.props?.message?.message || data.props?.message?.messageBody;
    // if(content.startsWith('%'))
    data.props._enhancer_system_message = true;
    message.classList.add('te-system-message');
}
