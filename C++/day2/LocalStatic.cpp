#include<iostream>
using namespace std;
static int b = 11;
int a = 10;
void show(){
    static int a =11;
    cout<<"in local static "<<a<<endl;
    a++;
    b++;
    int cout = 2;
    std::cout<<cout;
}
int main(){
    show();
    show();
    show();
    cout<<"in global "<<a<<endl;
    cout<<"in global static "<<b<<endl;
    
}