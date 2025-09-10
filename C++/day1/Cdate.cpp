#include<iostream>
using namespace std;
class Cdate{
    int dD,mM,yY;
    public:
    void accept();
    void display();
    void setMm(int);
    int getMm();

};
void Cdate::accept(){
    cout<<"Enter day, month, year"<<endl;
    cin>>dD>>mM>>yY;
}
void Cdate::display(){
    cout<<"Date is "<<dD<<"/"<<mM<<"/"<<yY<<endl;
}
void Cdate::setMm(int p){
    mM = p;
}
int Cdate::getMm(){
    return mM;
}
int main(){
    Cdate c1;
    c1.accept();
    c1.display();
    int temp ; 
    cout<<"enter new month "<<endl;
    cin>>temp;
    c1.setMm(temp);
    cout<<"Month is "<<c1.getMm();
}
