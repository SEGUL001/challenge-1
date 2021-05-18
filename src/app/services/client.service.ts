import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { ClientStruct } from '../model/client';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class ClientService {
  private clientDb: AngularFireList<ClientStruct>;
  constructor(private db: AngularFireDatabase) {
    this.clientDb = this.db.list('/clients', (ref) =>
      ref.orderByChild('id')
    );
  }

  getClients(): Observable<ClientStruct[]> {
    //? this.jugadoresDB ya tiene la base de datos.
    //? snapshotChanges obtiene la informacion en este momento.
    //? Obtiene los datos junto con la Key
    //? Con Pipe permite hacer modificaciones
    //? Con Map haremos un cambio, que por cada uno de los jugadores retornaremos la informacion,
    //? y se Agregue una Key.
    //? El formato de key siempre es $key.
    //? Payload es por donde esta viajando la data.
    return this.clientDb.snapshotChanges().pipe(
      //?A veces hay que importar map manualmente de rsjs/operators
      map((changes: any) => {
        return changes.map((c: any) => ({
          $key: c.payload.key,
          ...c.payload.val(),
        }));
      })
    );
  }

  addClient(client: ClientStruct) {
  
    return this.clientDb.push(client);
  }

}

