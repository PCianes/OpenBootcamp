package com.company;

public class SmartWatch extends SmartDevice {

    private boolean notifications;

    public SmartWatch(){

    }

    public SmartWatch(boolean on, String model, String owner, boolean notifications) {
        super(on, model, owner);
        this.notifications = notifications;
    }

    @Override
    public void printAttributes() {
        System.out.println("SmartWatch: " + model + " it's from " + owner + " and have notifications: " + notifications);
    }
}
