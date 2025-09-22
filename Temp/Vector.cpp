#include<iostream>
#include<vector>
using namespace std;
int main(){
    vector<int> num;
    num.push_back(10);
    num.push_back(20);
    num.push_back(30);

    cout<<"size : "<<num.size()<<endl;
    cout<<"Capa : "<<num.capacity()<<endl;
    cout<<"size : "<<num.max_size()<<endl;
    num.pop_back();
    for(auto i = num.rbegin();i<num.rend();i++){
        cout<<*i<<endl;
    }
    cout<<"top : "<<num.front();

}