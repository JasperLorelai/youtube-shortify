const { Plugin } = require('powercord/entities');
const { inject, uninject } = require('powercord/injector');
const { messages } = require('powercord/webpack');

const regex = /https:\/\/www\.youtube\.com\/watch\?v=(?!\w{0,30}&list)/g;
const clearURL = "https://youtu.be/";

module.exports = class ExamplePlugin extends Plugin {
    startPlugin() {
        inject("youtubeShortify", messages, "sendMessage", args => {
            args[1].content = args[1].content.replace(regex, clearURL);
            return args;
        }, true);
    }

    pluginWillUnload() {
        uninject("youtubeShortify");
    }
}
