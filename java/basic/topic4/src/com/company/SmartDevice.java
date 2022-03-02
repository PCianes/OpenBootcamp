package com.company;

public abstract class SmartDevice {
    protected boolean on;
    protected String model;
    protected String owner;

    SmartDevice(){

    }

    public SmartDevice(boolean on, String model, String owner) {
        this.on = on;
        this.model = model;
        this.owner = owner;
    }

    public abstract void printAttributes();
}
